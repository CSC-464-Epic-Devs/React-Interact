module.exports = {
  pathPrefix: `React-Interact/`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Regular Developers`
  },
  plugins: [
    {
      resolve: "gatsby-remark-code-repls",
      options: {
        // Optional default link text.
        // Defaults to "REPL".
        // eg <a href="...">Click here</a>
        defaultText: "Click here",

        // Example code links are relative to this dir.
        // eg examples/path/to/file.js
        directory: `${__dirname}/src/_examples/`,

        // Optional link target.
        // Note that if a target is specified, "noreferrer" will also be added.
        // eg <a href="..." target="_blank" rel="noreferrer">...</a>
        target: "_blank",

        // Provider specific options
        codepen: {
          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // eg '<div id="root"></div>'
          html: "",

          // Optional externals to load from a CDN.
          // eg '//unpkg.com/react/umd/react.development.js'
          externals: [],

          // Include CSS with matching name.
          // If set to `true`, when specifying `file1.js` as example file,
          // it will try to inject the CSS in `file1.css` if the file exists,
          // otherwise the default behaviour is preserved
          includeMatchingCSS: false
        },

        codesandbox: {
          // Optional HTML contents to inject into REPL.
          // Defaults to `<div id="root"></div>`.
          // eg '<div id="root"></div>'
          html: "",

          // Optional runtime dependencies to load from NPM.
          // eg ['react', 'react-dom'] or ['react@15', 'react-dom@15']
          dependencies: []
        }
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/_examples`
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/ReactLogo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:"
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
