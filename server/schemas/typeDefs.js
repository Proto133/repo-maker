const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type Repo {
    _id: ID
    name: String
    databaseTech: String
    models: String
    apiType: String
    frontend: String
    }

  type Query {
    repos:[Repo]
    repo(_id: String):Repo
  }

  type Mutation {
    outlineRepo(name: String!, kind: String, databaseTech: String, models: String, apiType: String, frontend: String): Repo
    genModel(name: String!):Repo
  }
`;

module.exports = typeDefs;