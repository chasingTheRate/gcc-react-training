# React Basics

For consistency we'll adhere to the following guide for file naming convention:

[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming)

## Clone Setup Repo:

1. Clone Repo: https://github.com/chasingTheRate/gcc-react-training.git (branch: **setup**)

## Create New Component

1.  Create ParentComponent.jsx in **src** folder.
2.  Add the following code to ParentComponent.jsx
    ```
    import React, { Component } from 'react';

    class ParentComponent extends Component {
      constructor(props) {
        super(props);

      }

      render() {
        return (
          <div>Hello Team Shelby</div>
        );
      }
    }

    export default ParentComponent;
    ```
3.  Import ParentController in **App.jsx**

    ```
    import ParentController from './ParentComponent';
    ```
4.  Replace ```<div>Hello Team Shelby!</div>``` with ```<ParentController></ParentController>``` in **App.jsx**
5.  Run ```npm start```.  You should see "Welcome Team Shelby" in the browser.
