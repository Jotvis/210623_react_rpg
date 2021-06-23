const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    username: {
        unique: true,
        type: String,
        required: 'Username already exists'
    },
    email: {
        unique: true,
        type: String,
        required: 'Email already exists'
    },
    password: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        default: 'SECRET DEFAULT'
    },
    hp: {
        type: Number,
        default: 100
    },
    gold: {
        type: Number,
        default: 100
    },
    inventory: {
        type: Object,
        default: {}
    }
})

const usersModel = mongoose.model('usersModel', usersSchema)

module.exports = usersModel