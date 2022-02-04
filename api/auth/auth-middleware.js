const Users = require('../users/user-model')

const validateUniqueUsername = async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await Users.get()        
        user.map(each => {
                if ( each.username === username ) {
                    next({ status: 400, message: "username taken" })
                }
            })
    next()
    } catch (err) {
        next(err)
    }
}

const validateInfo = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            next({ status: 400, message: "username and password required" })
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateUniqueUsername,
    validateInfo
}