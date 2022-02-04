const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  email: String
  itemCount: Int
  savedBooks: [Item]s
}
type Item {
  categories: [String]
  storageLocation: String
  addedDate: Date
  exeriationDate: Date
  name: String
  quantity: Int
}
`;

// module.exports = typeDefs;
// QUERIES
// me returns User type

// MUTATIONS
// login, accepts email, password, returns Auth(JWT)
// addUser, accepts email, password, returns Auth
// saveItem, accepts array of categories(strings), storage location(string), addedDate(date), experiationDate(date), name(string), quantity(int)
// removeItem, accepts itemId(verifies it belongs to user)