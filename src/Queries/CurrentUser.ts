import graphql from "babel-plugin-relay/macro";

const CurrentUserQuery = graphql`
  query CurrentUserQuery {
    currentUser {
      name
    }
  }
`;

export default CurrentUserQuery;
