module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      {
          resolve: 'gatsby-plugin-i18n',
          options: {
              langKeyDefault: 'ru',
              useLangKeyLayout: false
          }
      },

  ],

}
