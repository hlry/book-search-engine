import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            link
            image
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        link
        image
      }
    }
  }
`;

// export const SAVE_BOOK = gql`
// mutation saveBook(
//   $authors: [String], $title: String!, $description: String, $bookId: String!, $image: String, $link: String
// ) {
//   saveBook(
//     authors: $authors
//     title: $title
//     description: $description
//     bookId: $bookId
//     image: $image
//     link: $link
//   ) {
//     username
//     _id
//     bookCount
//     savedBooks {
//       title
//       bookId
//     }
//   }
// }
// `;

// export const SAVE_BOOK = gql`
//   mutation saveBook($bookData: BookInput) {
//     saveBook(bookData: $bookData) {
//         _id
//         username
//         email
//         bookCount
//         savedBooks {
//             bookId
//             title
//             description
//             authors
//             link
//             image
//         }
//     }
// }
// `;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        description
        authors
        link
        image
      }
    }
  }
`;