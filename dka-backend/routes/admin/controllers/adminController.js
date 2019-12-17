const Item = require('../models/Item')
const User = require('../../users/models/User')
const Quest = require('../models/Quest')
const Skill = require('../models/SkillTree')
const bcrypt = require('bcryptjs')

module.exports = {
    
    findPlayer: (params) => {
        return new Promise((resolve, reject) => {
            User.findOne({ email: params.email })
                .then(user => {
                    if (!user) {
                        const error = {
                            status: 400,
                            message: 'User not found'
                        }
                        reject(error)
                    } else {
                            resolve(user)
                        }
                    }
                    
                )
                .catch(err => reject(err))
        })
    },

    updatePlayer: (params) => {
        return new Promise((resolve, reject) => {
            User.findOne({ email: params.email })
                .then(user => {
                    if (params.playerName != '') {
                        user.player = params.playerName
                    }
                    if (params.charName != '') {
                        user.charName = params.charName
                    }
                    if (params.email != '') {
                        user.email = params.email
                    }
                    if (params.class != '') {
                        user.class = params.class
                    }
                    if (params.guild != '') {
                        user.guild = params.guild
                    }
                    if (params.race != '') {
                        user.race = params.race
                    }
                    if (params.level != '') {
                        user.level = Number(params.level)
                    }
                    if (params.xp != '') {
                        user.xp = Number(params.xp)
                    }
                    if (params.zenni != '') {
                        user.zenni = Number(params.zenni)
                    }
                    if (params.hp != '') {
                        user.zenni = Number(params.zenni)
                    }
                    if (params.combatMod != '') {
                        user.combatMod = Number(params.combatMod)
                    }
                    if (params.defenseMod != '') {
                        user.defenseMod = Number(params.defenseMod)
                    }
                    user.save()
                        .then(newUser => {
                            console.log(newUser);
                            resolve(newUser)
                        })
                        .catch(err => reject(err))
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    createPlayer: (params) => {
        return new Promise((resolve, reject) => {
            User.findOne({ email: params.email })
                .then(user => {
                    if (user) {
                        const error = {
                            status: 500,
                            message: 'Email address already exists in database'
                        }
                        reject(error)
                    } else {
                        console.log(params);
                        const newUser = new User
                        if (params.admin.toLowerCase() === 'yes') {
                            newUser.admin = true
                        }
                        newUser.charName = params.charName
                        newUser.player = params.playerName
                        newUser.email = params.email
                        newUser.class = params.class
                        newUser.guild = params.guild
                        newUser.race = params.race
                        newUser.level = params.level
                        newUser.hp = params.hp
                        newUser.zenni = params.zenni
                        newUser.xp = params.xp
                        newUser.combatMod = params.combatMod
                        newUser.defenseMod = params.defenseMod
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(params.password, salt, (err, hash) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    newUser.password = hash
                                    newUser.save()
                                        .then(result => {
                                            resolve(result)
                                        })
                                        .catch(errorSave => {
                                            reject(errorSave)
                                        })
                                }
                            })
                        })
                    }
                })
                .catch(err => reject(err))
        })
    },

    getAllItems: () => {
        return new Promise((resolve, reject) => {
            Item.find()
                .then(items => {
                    resolve(items)
                })
                .catch(err => reject(err))
        })
    },

    createItem: (params) => {
        return new Promise((resolve, reject) => {
            const newItem = new Item
            newItem.name = params.name
            newItem.category = params.category
            newItem.description = params.description
            newItem.cost = params.cost
            newItem.save()
                .then(item => resolve(item))
                .catch(err => reject(err))
        })
    },

    updateItem: (params) => {
        return new Promise((resolve, reject) => {
            Item.findById(params.id)
                .then(item => {
                    if (params.name != '') {
                        item.name = params.name
                    }
                    item.category = params.category
                    if (params.description != '') {
                        item.description = params.description
                    }
                    if (params.cost != '' && Number(params.cost) >= 0) {
                        item.cost = params.cost
                    }
                    item.save()
                        .then(updateItem => resolve(updateItem))
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    },

    createQuest: (params) => {
        return new Promise((resolve, reject) => {
            const newQuest = new Quest
            if (params.description != '') {
                newQuest.description = params.description
            }
            newQuest.category = params.category
            newQuest.realm = params.realm
            newQuest.save()
                .then(quest => resolve(quest))
                .catch(err => reject(err))
        })
    },

    getAllQuests: () => {
        return new Promise((resolve, reject) => {

        })
    },

    getRealmQuests: (params) => {
        return new Promise((resolve, reject) => {
            Quest.find({ realm: params.realm })
                .then(quests => {
                    resolve(quests)
                })
                .catch(err => reject(err))
        })
    },

    updateQuest: (params) => {
        return new Promise((resolve, reject) => {
            Quest.findById(params.id)
                .then(quest => {
                    if (params.description != '') {
                        quest.description = params.description
                    }
                    quest.category = params.category
                    quest.save()
                        .then(updateQuest => resolve(updateQuest))
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    },

    deleteQuest: (params) => {
        return new Promise((resolve, reject) => {
            Quest.findByIdAndDelete(params.id)
                .then(quest => {
                    const payload = {
                        message: 'Quest deleted successfully'
                    }
                    resolve(payload)
                })
                .catch(err => reject(err))
        })
    },

    deleteItem: (params) => {
        return new Promise((resolve, reject) => {
            console.log(params.id);
            Item.findByIdAndDelete(params.id)
                .then(item => {
                    console.log(item);
                    const payload = {
                        message: 'Item deleted successfully'
                    }
                    resolve(payload)
                })
                .catch(err => reject(err))
        })
    },

    createSkill: (params) => {
        return new Promise((resolve, reject) => {
            console.log(params);
            const newSkill = new Skill
            newSkill.name = params.name
            newSkill.description = params.description
            newSkill.lvl = params.level
            newSkill.class = params.class
            newSkill.path = params.path
            newSkill.save()
                .then(skill => {
                    resolve(skill)
                })
                .catch(err => reject(err))
        })
    },

    getAllSkills: () => {
        return new Promise((resolve, reject) => {
            Skill.find()
                .then(skills => {
                    resolve(skills)
                })
                .catch(err => reject(err))
        })
    },

    updateSkill: (params) => {
        return new Promise((resolve, reject) => {
            console.log(`params: `, params);
            Skill.findById(params.id)
                .then(skill => {
                    console.log(skill);
                    if (params.name != '') {
                        skill.name = params.name
                    }
                    if (params.description != '') {
                        skill.description = params.description
                    }
                    if (params.level != '') {
                        skill.lvl = Number(params.level)
                    }
                    skill.class = params.class
                    skill.path = params.path
                    skill.save()
                        .then(updateSkill => {
                            resolve(updateSkill)
                        })
                        .catch(err => reject(err))
                })
                .catch(err => reject(err))
        })
    }
}