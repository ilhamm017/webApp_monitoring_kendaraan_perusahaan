const { User } = require('../models')
const { hash, compare } = require('../helper/hash')

module.exports = {
    register: async (request, h) => {
        try {
            let { name, password, email, role } = request.payload
            email = email.toLowerCase()
            const registered = await User.findOne({
                where: {
                    email
                }
            })
            if (registered) {
                return h.response({
                    message: 'email sudah terdaftar !'
                })
            }
            password = hash(password)
            const createUser = await User.create({
                name, email, password, role
            })
            return h.response({
                message: 'register sukses'
            })
    
        } catch (error) {
            return h.response({
                message: error.message
            }).code(500)
        }
    },

    login: async (request, h) => {
        try {
            let { password, email } = request.payload
            let verifyUser
            if (email) {
                email = email.toLowerCase()
                verifyUser = await User.findOne({
                    where: {
                        email
                    },
                    attributes: ['id','email','password']
                })
            }
            if (!verifyUser) {
                return h.response({
                    message: 'Email tidak terdaftar'
                }).code(400)
            }
            if (!compare(password, verifyUser.password)) {
                return h.response({
                    message: 'password salah!'
                }).code(400)
            }
            return h.response({
                message:'pass'
            })
        } catch (error) {
            return h.response({
                message: error.message
            })
        }
    }
}