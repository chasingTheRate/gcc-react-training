
# Setup

## Prequisites

1. Github Account or work locally
2. Install NodeJS (v11.2.0) and NVM (v6.6.0)

## Install React
1.  Create/Clone Repository in Github (or work locally)

2.  ```npm init```
    * Accept defaults.  
    
3.  ```git init```
    * Create .gitignore file.
    
4.  ```npm i --save react```

5.  ```npm i --save react-dom```

[React Reference](https://reactjs.org/)

## Babel

1. Install
    * ```npm i --save-dev @babel/core```
    * ```npm i --save-dev @babel/preset-react```
    * ```npm i --save-dev babel-loader``` _(for webpack config)_
    
2.  Configure
    1.  Create **.babelrc** file.
  
    2.  Insert the following code:
        ```
        {
          "presets": ["@babel/preset-react"]
        }
        ```
    
[Babel Reference](https://babeljs.io/)

##  Webpack

1.  Install
    * ```npm i --save-dev webpack```
    * ```npm i --save-dev webpack-cli```    
    * ```npm i --save-dev webpack-dev-server``` _for local development_
    * ```npm i --save-dev clean-webpack-plugin``` _plugin_
    * ```npm i --save-dev html-webpack-plugin``` _plugin_
    
2.  Configure
    1.  Create **webpack.config.js** file
    2.  Insert the following code:
        ```
        const path = require("path");
        const webpack = require("webpack");
        const clearWebpackPlugin = require('clean-webpack-plugin');
        var HtmlWebpackPlugin = require('html-webpack-plugin');

        module.exports = {
          mode: 'development',
          entry: ['./src/App'],
          output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "bundle.js", //"bundle.[hash].js",
            publicPath: '/'
          },
          module: {
            // rules: [
            //   {
            //     test: /\.(js|jsx)$/,
            //     exclude: /(node_modules|bower_components)/,
            //     loaders: ['babel-loader'],
            //   },
            // ],
          },
          resolve: { extensions: ['*', '.js', '.jsx'] },
          plugins: [
            // new clearWebpackPlugin(['dist']),
            // new webpack.HotModuleReplacementPlugin(),
            // new HtmlWebpackPlugin({
            //   template: 'src/templates/index.html'
            // })
          ],
          devtool: 'inline-source-map',
          // devServer: {
          //   compress: true,
          //   port: 9000,
          //   publicPath: '/dist',
          //   historyApiFallback: true
          // },
        };
        ```
[Webpack Reference](https://webpack.js.org/)

## First React File

1.  Create ```src``` directory
2.  Create **App.jsx** file inside **src** directory
3.  Insert the following code:

  ```
  import React from 'react';
  import ReactDOM from 'react-dom';

  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('root');
    if (target) {
      ReactDOM.render(
        <div>Hello Team Shelby!</div>,
        target,
      );
    } else {
      console.warn('tried to load React and failed :(');
    }
  });
  ```
## Index.html and Package.json

4.  Create **index.html** file
5.  Insert the following code into **index.html**
    ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>React Playground</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
    ```
6.  Update **package.json**
    *  Add the following script:
    ```
    "build": "webpack --config webpack.config.js",
    ```
  
## First Build

1.  ```npm run build```

What happened?  Babel!!

2.  Unhide rules under module:

    ```
    module: {
      // rules: [
      //   {
      //     test: /\.(js|jsx)$/,
      //     exclude: /(node_modules|bower_components)/,
      //     loaders: ['babel-loader'],
      //   },
      // ],
    },
    ```
3.  What happened/Where did the build go?
    *  **bundle.js** in **dist** folder.

4.  How do we view the react app with a server to serve the files? **A: webpack-dev-server**

## Webpack Dev Server

1.  Unhide **devServer** key in **webpack.config.js**

2.   Add the following code to the **package.json scripts key:
    ```
    "start": "npm run devServer",
    "build": "webpack --config webpack.config.js",
    "devServer": "webpack-dev-server --config webpack.config.js --open --hot --inline"
    ```
 
3.  ```npm start```
        
