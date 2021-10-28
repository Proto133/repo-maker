const { Repo } = require('../models');
// const createRepo = require('../utils/createRepo')
const makeRepo = require('../utils/makeRepo')

const compare= (a,b)=>{
    if ( a.level < b.level ){
        return -1;
      }
      if ( a.level > b.level ){
        return 1;
      }
      return 0;
    }

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
        },
        directWriteRepo: async(parent, args) =>{
            let content = JSON.parse(args.content)
            let contentArray =[]
            content.forEach(item => contentArray.push(item))
            contentArray.sort(compare)
            console.log(contentArray)
            args.content = contentArray

            console.dir(args)
            makeRepo(args)
        }
    },
};

module.exports = resolvers;