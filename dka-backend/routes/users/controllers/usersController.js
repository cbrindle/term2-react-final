const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    login: (params) => {
        return new Promise((resolve, reject) => {
            User.findOne({ email: params.email })
                .then(user => {
                    if (!user) {
                        const error = {
                            status: 400,
                            message: 'User not found in database'
                        }
                        reject(error)
                    } else {
                        bcrypt.compare(params.password, user.password)
                            .then(isMatch => {
                                const payload = {
                                    id: user._id,
                                    email: user.email
                                }
                                jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 3600}, (err, token) => {
                                    if (err) {
                                        reject(err)
                                    } else {
                                        let success = {}
                                        success.confirmation = true,
                                        success.token = `Bearer ${token}`
                                        success.name = user.player
                                        success.isAdmin = user.admin
                                        resolve(success)
                                    }
                                })
                            })
                            .catch(err => reject(err))
                    }
                })
                .catch(err => reject(err))
        })
    }
}