# React Basics

For consistency we'll adhere to the following guide for file naming convention:

[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react#naming)

## Clone Setup Repo:

1. Clone Repo: https://github.com/chasingTheRate/gcc-react-training.git (branch: **setup**)

## Download React Dev Tools

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

## Create Child Component

1.  Create ChildComponent.jsx in **src** folder.
2.  Add the following code to ParentComponent.jsx
    ```
    import React, { Component } from 'react';

    class ChildComponent extends Component {
      constructor(props) {
        super(props);

      }

      render() {
        return (
          <button>Hello Team Shelby!</button>
        );
      }
    }

    export default ChildComponent;
    ```
3.  Import ChildController in **ParentController.jsx**

    ```
    import ChildController from './ChildController';
    ```
4.  Replace ```<button>Hello Team Shelby!</button>``` with ```<ChildController></ChildController>``` in **ParentController.jsx**
5.  Webpack should be updating your browser

## Props

1.  In ChildController.jsx, replace the code in the render() method with:
    ```
    render() {

    const message = this.props.message || 'Message Not Found';

    return (
      <button>{ message }</button>
    );
    }
    ```
2.  Why do we see 'Message Not Found'?  A: We haven't defined the message prop.  Let's do that now.
3.  In ParentController.jsx, add the message attribute to the ChildComponent:
    ```
    <ChildComponent message="Welcome Team Shelby!"></ChildComponent>
    ```
4.  Do you see "Welcome Team Shelby!"?  No?  What did you do wrong?!!!!

## State

1.  In **ParentComponent.jsx** add the following code to the constructor:
    ```
    constructor(props) {
        super(props);

        this.state = {
          message: "Welcome Team Shelby (from state)"
        }
    }
    ```
2.  In **ParentComponent.jsx**, in rendor(), add the replace the message attribute in the ChildComponent with:
    ```
    <ChildComponent message={ this.state.message }></ChildComponent>
    ```
3. What do you see in the browser now?

## Update State

1.  In **ParentController.jsx** under rendor(), add a <div> an <input> element as shown below:
    ```
    render() {
        return (
          <div>
            <input onChange="" placeholder="Enter something..."></input>
            <ChildComponent message={ this.state.message }></ChildComponent>
          </div>
        );
      }
    ```
2.  In **ParentController.jsx**, add a handleChange() function in between the constructor and render functions:

    ```
    handleChange(e){
        this.setState({
          message: e.target.value
        });
      }
    ```
3. Update the onChange attribute in the <input> element:
    ```
    <input onChange={this.handleChange} placeholder="Enter something..."></input>
    ```
4. Go to browser and enter any text in the input box.  Look at the console?  What do you see?  Why?
    
  
