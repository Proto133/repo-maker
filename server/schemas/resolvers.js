const db = require('../models')
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
        repos: async() => {
            const result = await db.Repo.find({}).populate({path:'content', model: 'Content'})
            return result
        },
        repo: async(parent, { _id }) => {
            console.log({_id})
            const result = await db.Repo.findOne({_id: _id}).populate({path:'content', model: 'Content'});
            console.log(result);
            return result
        },
        content: async(parent, {repoID})=>{
            const result = await db.Content.find({repoID: repoID})
            console.log(result)
            return result
        }
    },
    Mutation: {
        outlineRepo: async(parent, args) => {
            const repository = await db.Repo.create(args);
            console.log(repository._doc)
            makeRepo(repository._doc)
            return repository;
        },
        // directWriteRepo: async(parent, args) =>{
        //     let content = JSON.parse(args.content)
        //     let contentArray =[]
        //     content.forEach(item => contentArray.push(item))
        //     contentArray.sort(compare)
        //     console.log(contentArray)
        //     args.content = contentArray

        //     console.dir(args)
        //     makeRepo(args)
        // }

        saveContent: async(parent, args) => {
            const repoContent = await db.Content.create(args)
            const addToRepo = await db.Repo.findOneAndUpdate({_id: args.repoID}, {$addToSet: {content: repoContent._id}})
            console.log(repoContent._doc)
            return repoContent
        },
        removeRepo: async(parent, args) => {
            const targetID = args.repoID
            try{
            await db.Content.deleteMany({repoID: targetID})
            const deletedRepo= await db.Repo.findByIdAndDelete(targetID)
        return deletedRepo   
        }
            catch (err) {throw err}
        
            }
        
    },
};

module.exports = resolvers;