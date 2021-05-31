const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: String!
        title: String!
        description: String
        authors: [String]
        link: String       
        image: String
    }
    input SavedBookInput {
        bookId: String!
        title: String!
        description: String
        authors: [String]
        link: String       
        image: String    
    }
    type User{
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User          
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
        saveBook(input: SavedBookInput): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;