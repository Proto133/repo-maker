const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type Repo {
    _id: ID
    name: String
    kind: String
    databaseTech: String
    # models: String
    apiType: String
    frontend: String
    content:[Content]
    }
  type Content{
    _id: ID
    repoID: ID
    level: Int
    parent: String
    selfType: String
    selfName: String
  }

  type Query {
    repos:[Repo]
    repo(_id: ID!):Repo
    content(repoID: ID!):[Content]
  }



  type Mutation {
    outlineRepo(name: String!, kind: String, databaseTech: String, models: String, apiType: String, frontend: String): Repo
    # directWriteRepo(name: String!, kind: String, databaseTech: String, models: String, apiType: String, frontend: String, content: String): Repo
    saveContent(repoID: ID!, level: Int, parent: String, selfType: String, selfName: String): Content
  }
`;

module.exports = typeDefs;