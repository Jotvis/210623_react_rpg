const userDb = require('../schemas/usersSchema')

const validator = (req, res, next) => {
    let errMsg = []

    console.log(req.body)



    // const {username, email, password} = req.body
    // for (let letter of username) {
    //     if (Number(letter) == letter) {
    //         errMsg.push('Number in name')
    //     }
    // }
    //
    // if (
    //     email.length < 3 ||
    //     email.length > 100 ||
    //     !email.includes('@') ||
    //     !email.includes('.')
    // ) {
    //     errMsg.push("Invalid email")
    // }
    //
    // let pwCounter = 0
    // let num = false
    // for (let letter of password) {
    //     if (letter === letter.toUpperCase()) {
    //         console.log(letter)
    //         pwCounter ++
    //     }
    //     if (Number(letter) == letter) {
    //         num = true
    //     }
    // }
    // if (pwCounter < 3 || !num) {
    //     errMsg.push("Invalid password. Min 3 uppercase and 1 number")
    // }
    // if (errMsg.length > 0) {
    //     return res.send({success: false, error: errMsg})
    // }

    next()
}
module.exports = validator