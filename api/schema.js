const { gql } = require("apollo-server");

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    imgUrl: String!
    description: String
    photographeName: String
    createdDate: String!
  }

  input PostInput {
    title: String!
    imgUrl: String!
    description: String
    photographeName: String
    createdDate: String!
  }

  input PostInputUpdate {
    title: String
    imgUrl: String
    description: String
    photographeName: String
  }

  type Query {
    posts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addPost(data: PostInput): Post
    updatePost(_id: ID!, data: PostInputUpdate): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;
