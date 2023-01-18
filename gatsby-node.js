const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/components/BlogPost.tsx`);
  const { data } = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              date
              path
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `).catch((error) => console.error(error));
  console.log(data);
  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.frontmatter.path}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
