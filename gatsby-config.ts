import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Altheria`,
    siteUrl: `https://www.altheria.be`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./images/icon.png"
    }
  }, {
      resolve: 'gatsby-plugin-mdx',
      options: {
        "extensions": [".mdx", ".md"],
        "gatsbyRemarkPlugins": ["gatsby-remark-katex", "gatsby-remark-images"],
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./images"
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages",
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./Content",
      },
    },]
};

export default config;
