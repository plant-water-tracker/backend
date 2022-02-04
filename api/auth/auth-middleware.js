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

const validatePhone = async (req, res, next) => {
    try {
        const { phoneNumber } = req.body
        const user = await Users.get()        
        user.map(each => {
                if ( each.phoneNumber === phoneNumber ) {
                    next({ status: 400, message: "That phone number is being used by another user" })
                }
            })
        if (isNaN(phoneNumber) || phoneNumber.length !== 10){
            next({ status: 400, message: "Please insert a valid 10 digit phone number"})
        }
        next()
    } catch (err) {
        next(err)
    }
}

const validateInfo = async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            next({ status: 400, message: "Username and Password are required" })
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateUniqueUsername,
    validatePhone,
    validateInfo
}