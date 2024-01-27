import GraphQL from "../scripts/graphql.js";

export const listingList = await GraphQL.query(`
query {
  listings {
    data {
      attributes {
        biz_name
        slug
        seo_title
        seo_desc
        main_value
        mv_info
        cta_1
        klient_img {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        sc_hook
        ico1
        bnf1
        bnf1_info
        ico2
        bnf2
        bnf2_info
        ico3
        bnf3
        bnf3_info
        nas_title
        nas_info
        cta_2
        img_me {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        features_title
        ft
        faq_title
        faq
      }
    }
  }
}
`);
