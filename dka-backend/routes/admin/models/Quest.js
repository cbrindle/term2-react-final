const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestSchema = new Schema({
    description: { type: String, default: '' },
    category: { type: String, default: '' },
    realm: { type: String, default: '' }
})

module.exports = mongoose.model('quest', QuestSchema);