const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillTreeSchema = new Schema({
    class: { type: String, default: '' },
    path: { type: String, default: '' },
    name: { type: String, default: '' },
    lvl: { type: Number, default: 0 },
    description: { type: String, default: '' }
})

module.exports = mongoose.model('skill', SkillTreeSchema)