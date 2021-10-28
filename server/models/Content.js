const { Schema, model } = require('mongoose');

const contentSchema = new Schema({
    repoID: {
        type: Schema.Types.ObjectId,
        ref: 'Repo'
        },
    level: {
        type: Number,
    },
    parent: {
        type: String,
    },
    selfType:{
        type: String,
    },
    selfName:{
        type: String
    }
    
})


const Content = model('Content', contentSchema);

module.exports = Content;