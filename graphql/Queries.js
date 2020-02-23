import gql from 'graphql-tag';

const Queries = gql`
  {
    characters {
      results {
        id
        name
        species
        location {
          created
        }
        gender
        origin {
          name
          dimension
        }
        image
      }
    }
  }
`;

export default Queries;
