const { Schema, model } = require('mongoose');

const repoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    database: {
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