import GraphQL from "../scripts/graphql.js";

export const listingList = await GraphQL.query(`
query{
  listings {
    data{
      attributes{
        slug
        name
        text1
      }
    }
  }
}
`);
