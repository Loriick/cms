import { gql } from "apollo-boost";

export const POSTS = gql`
  {
    posts {
      _id
      title
      imgUrl
      description
      photographeName
    }
  }
`;

export const POST = gql`
  query POST($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      imgUrl
      description
      photographeName
    }
  }
`;

export const ADD_POST = gql`
  mutation ADD_POST(
    $title: String!
    $imgUrl: String!
    $description: String
    $photographeName: String
  ) {
    addPost(
      data: {
        title: $title
        imgUrl: $imgUrl
        description: $description
        photographeName: $photographeName
      }
    ) {
      _id
      title
      imgUrl
      description
      photographeName
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UPDATE_POST(
    $_id: ID!
    $title: String!
    $imgUrl: String!
    $description: String
    $photographeName: String
  ) {
    upadePost(
      _id: $_id
      data: {
        title: $title
        imgUrl: $imgUrl
        description: $description
        photographeName: $photographeName
      }
    ) {
      _id
      title
      imgUrl
      description
      photographeName
    }
  }
`;
export const DELETE_POST = gql`
  mutation DELETE_POST($ima_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`;
