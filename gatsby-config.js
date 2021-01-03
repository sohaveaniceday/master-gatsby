import dotenv from 'dotenv';

dotenv.config();

export default {
  siteMetadata: {
    title: `Slicks Slicers`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza in town',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ojt6blen',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
