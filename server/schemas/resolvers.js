const { Repo } = require('../models');
// const createRepo = require('../utils/createRepo')
const makeRepo = require('../utils/makeRepo')

const resolvers = {
    Query: {
        repo: async() => {
            return Repo.find({});
        },
        repo: async(parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Repo.find(params);
        },
    },
    Mutation: {
        outlineRepo: async(parent, args) => {
            const repository = await Repo.create(args);
            console.log(repository._doc)
            makeRepo(repository._doc)
            return repository;
        }
    },
};

module.exports = resolvers;