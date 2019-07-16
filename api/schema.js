const { gql } = require("apollo-server");

const typeDefs = gql`
  type Media {
    _id: ID!
    title: String!
    src: String!
    description: String
    by: String
    createdDate: String!
    updatedDate: String
    category: String!
    type: String!
  }
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  input MediaIntput {
    title: String!
    imgUrl: String!
    description: String
    photographeName: String
    updatedDate: String
    createdDate: String!
    category: String!
    type: String!
  }

  input MediaIntputUpdate {
    title: String
    imgUrl: String
    description: String
    photographeName: String
    category: String
    updatedDate: String
  }

  type Query {
    medias: [Media]
    media(_id: ID!): Media
  }

  type Mutation {
    addMedia(data: MediaIntput): Media
    updateMedia(_id: ID!, data: MediaIntputUpdate): Media
    deleteMedia(_id: ID!): Media
  }
`;

module.exports = typeDefs;
