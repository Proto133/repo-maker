const { Repo } = require('../models');

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
        createRepo: async(parent, args) => {
            const repository = await repository.create(args);
            return repository;
        }
    },
};

module.exports = resolvers;