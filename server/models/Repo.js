const { Schema, model } = require('mongoose');

const repoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    kind: {
        type: String,
    },
    databaseTech: {
        type: String,
    },
    apiType: {
        type: String,
    },
    frontend: {
        type: String,
    }
})


const Repo = model('Repo', repoSchema);

module.exports = Repo;