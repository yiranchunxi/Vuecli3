module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", { "strictMode": false }],
    ["component", 
      {
        "libraryName": "mint-ui",
        "style": true
      } 
    ]
  ]
}
