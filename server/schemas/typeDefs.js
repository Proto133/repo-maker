const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type Repo {
    _id: ID
    name: String
    database: String
    apiType: String
    frontend: String
    }

  type Query {
    repos:[Repo]
    repo(_id: String): [Repo]
  }

  type Mutation {
    createRepo(name: String!, database: String, apiType: String, frontend: String): Repo
  }
`;

module.exports = typeDefs;