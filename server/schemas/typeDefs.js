const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type Repo {
    _id: ID
    name: String
    databaseTech: String
    models: String
    apiType: String
    frontend: String
    content:[File]
    }

  type Query {
    repos:[Repo]
    repo(_id: String):Repo
  }

type File{
  name: String
  type: String
  data: String
}


  type Mutation {
    outlineRepo(name: String!, kind: String, databaseTech: String, models: String, apiType: String, frontend: String): Repo
    directWriteRepo(name: String!, kind: String, databaseTech: String, models: String, apiType: String, frontend: String content:String):Repo
    genModel(name: String!):Repo
  }
`;

module.exports = typeDefs;