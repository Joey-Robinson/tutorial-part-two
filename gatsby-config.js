module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
        // This was regular quotes, needs to be back-ticks
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool",
              ellipses: "false",
            },
          },
        ],
      },
    },
  ],
}
