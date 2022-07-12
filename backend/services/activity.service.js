const {Activity} = require("../models/activity");

const createActivity = async (text, analysis) => {
    await Activity.sync();
    return await Activity.create({ text: text, analysis: analysis });
}

module.exports = {
    createActivity
}