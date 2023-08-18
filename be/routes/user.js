const userController = require('../controller/userController')

const userRoutes = [
    {
        path: '/register',
        method: 'POST',
        handler: userController.register
    },
    {
        path: '/login',
        method: 'POST',
        handler: userController.login
    }
]

module.exports = { userRoutes }