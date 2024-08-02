const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'procore-tools.js', // Output file name (updated to package name)
    library: 'ProcoreTools', // Name of the exported library
    libraryTarget: 'umd', // Export format (can be adjusted based on your needs)
    globalObject: 'this' // Ensures compatibility in different environments
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Files to transpile
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for ES6 and React
          },
        },
      },
      {
        test: /\.css$/, // Files to process for CSS
        use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file extensions
  },
  externals: {
    react: 'react', // Exclude React from the bundle
    'react-dom': 'react-dom', // Exclude ReactDOM from the bundle
  },
};