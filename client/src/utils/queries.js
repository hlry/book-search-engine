import gql from 'graphql-tag';

// graphql query for logged in users
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            title
            bookId
            authors
            description
            image
            link   
        }
    }
}
`;