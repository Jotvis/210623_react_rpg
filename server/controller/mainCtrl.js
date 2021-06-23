const userDb = require('../schemas/usersSchema')

const getAll = () => {
    return userDb.find()
}
const getSecret = async (email) => {
    return user._id
}

module.exports = {
    upload: async (req, res) => {
        const {username, email, pw1} = req.body
        const data = new userDb()
        data.username = username
        data.email = email
        data.password = pw1
        await data.save()
        let user = await userDb.findOne({email: email})
        res.send({success: true, secret: user._id})
    },
    login: async (req, res) => {
        let {email, password} = req.body
        let user = await userDb.findOne({email: email})
        if (user) {
            if (user.password === password) {
                console.log(user)
                res.send({success: true, secret: user._id})
            } else {
                console.log('invalid password')
                res.send({success: false, error: 'Invalid password'})
            }
        } else {
            console.log('no user')
            res.send({success: false, error: 'User not found'})
        }
        // if (user.password === password) {}
    },
    // update: async (req, res) => {
    //     let {id, name, age, email, password} = req.body
    //     await userDb.findOneAndUpdate(
    //         {_id: id},
    //         {
    //             name: name,
    //             age: age,
    //             email: email,
    //             password: password,
    //     })
    //     const users = await getAll()
    //     res.send({success: true, data: users})
    // },
    find: async (req, res) => {
        const {id} = req.params
        const entry = await userDb.findById(id)
        // console.log(entry)
        res.send({success: true, data: entry})
    },
    // delete: async (req, res) => {
    //     const {id} = req.params
    //     await userDb.findOneAndDelete({_id: id})
    //     const users = await getAll()
    //     res.send({success: true, data: users})
    // },
    // all: async (req, res) => {
    //     const users = await getAll()
    //     res.send({success: true, data: users})
    // }
}