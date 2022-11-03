const {gql} = require('apollo-server');

const typeDefs = gql`
type Query {
  "Query to get tracks array for the homepage grid"
  tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
