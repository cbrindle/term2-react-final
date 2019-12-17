const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    charName: { type: String, default: '' },
    player: { type: String, default: ''},
    email: { type: String, default: '', unique: true },
    password: { type: String, default: '' },
    class: { type: String, default: '' },
    guild: { type: String, default: '' },
    race: { type: String, default: '' },
    level: { type: Number, default: 1 },
    hp: { type: Number, default: 0 },
    zenni: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    combatMod: { type: Number, default: 0 },
    defenseMod: { type: Number, default: 0 },
    skills: [{
        name: { type: String, default: '' },
        modifier: { type: Number, default: 0 }
    }],
    items: [{
        name: { type: String, default: '' },
        modifier: { type: Number, default: 0 }
    }],
    notes: { type: String, default: '' },
    admin: { type: Boolean, default: false }
})

module.exports = mongoose.model('user', UserSchema);