//import gql tagged template function
const { gql } = require('apollo-server-express');

//create typeDefs
const typeDefs = gql`
type Query {
    thoughts: # what goes here?
  }
`;

module.exports = typeDefs;