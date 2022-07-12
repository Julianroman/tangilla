const wndb = require('wndb-with-exceptions');
const WordNet = require('node-wordnet');

const wordnet = new WordNet();

const lookUpSynonyms = async (words) => {
    let synonyms = {};
    for (let word of words){
        let hits = await wordnet.lookupAsync(word)
            .then(response => {
                return [].concat.apply([],
                    response.map(x => x.synonyms)).filter(y => y != word)
                // first map the result, then filter which ones are hits
        })
        synonyms[word] = hits;
    }
    return synonyms;
}

module.exports = {
    lookUpSynonyms
}