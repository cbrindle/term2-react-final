const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: { type: String, default: '' },
    category: { type: String, default: '' },
    description: { type: String, default: '' },
    cost: { type: Number, default: 0 }
})

module.exports = mongoose.model('item', ItemSchema);