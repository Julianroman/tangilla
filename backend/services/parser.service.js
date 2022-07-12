const {lookUpSynonyms} = require("./wordnet.service");
const {createActivity} = require("./activity.service");

const processText = async (req, res, next) => {
  try {
    const text = req.body.text;
    const wsRegex = /^\s+|\s+$/g;
    const cleanText = text.replace(wsRegex, "");
    const result = await parseText(cleanText);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({"error": error.message});
  }
};

const parseText = async (text) => {

  const wordsValid = initParse(text);
  let wordsToSkip = [];
  let synonyms = [];
  const hits = await lookUpSynonyms(wordsValid);

  for(let word of wordsValid){
    if(!wordsToSkip.includes(word)){

      // filter hits without counting itself
      let synonymousPresents = hits[word].filter(w => w != word && wordsValid.includes(w));

      // Add data
      synonyms.push({ word: word, synonyms_found: synonymousPresents.length });

      // Skip following words
      const existingSynonymous = wordsValid.filter(w => synonymousPresents.includes(w));
      if (existingSynonymous && existingSynonymous.length > 0) {
        wordsToSkip.push(...existingSynonymous);
      }
    }
  }

  await createActivity(text, JSON.stringify(synonyms));

  return synonyms.sort(orderResults);
}

const orderResults = (a, b) => {
  if (a.synonyms_found > b.synonyms_found){
    return 1;
  } else if (a.synonyms_found < b.synonyms_found) {
    return -1
  } else return 0;
}

const initParse = (text) => {
  const excludeWords = ['A', 'THE', 'AND', 'OF', 'IN', 'BE', 'ALSO', 'AS'];
  const wordsValid = text.split(' ').filter(word => !excludeWords.includes(word.toUpperCase()));
  const uniqueWordsValid = [...new Set(wordsValid)];
  return uniqueWordsValid;
}

module.exports = {
  processText,
  parseText,
};
