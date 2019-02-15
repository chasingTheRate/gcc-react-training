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
5.  Add ```this.handleChange = this.handleChange.bind(this);``` to constructor.

## Pass Functions to Child Components as Props:

1.  In **ParentComponent.jsx**, add the following function:
    ```
    handleClick(e){
        this.setState({
          message: 'Welcome Team Shelby!'
        })
    }
    ```
2.  In **ParentComponent.jsx**, add `this.handleClick = this.handleClick.bind(this);` in the constructor.
3.  In **ParentComponent.jsx** add a handleClick attribute to ChildComponent:

    ```
    <ChildComponent handleClick={ this.handleClick } message={ this.state.message }></ChildComponent>
    ```
4.  In **ChildComponent.jsx**, change

    ```
    const message = this.props.message || 'Message Not Found';
    ```
    to
    ```
    const { message, handleClick } = this.props;
    ```
5.  In **ChildComponent.jsx**, add an onClick handle to the button:
    ```
    <button onClick={handleClick}>{ message }</button>
    ```

## Conditional Rendering

1.  In **ParentComponent.jsx** update state to:
    ```
    this.state = {
      message: "Welcome Team Shelby (from state)",
      show: true
    }
    ```
2.  In **ParentComponent.jsx** add new function:
    ```
    showChildComponent(){
        console.log(this.state.show);
        this.setState({
          show: !this.state.show
        })
    }
    ```
3.  In **ParentComponent** bind _this_ to new function: `this.showChildComponent = this.showChildComponent.bind(this);`
4.  In **ParentComponent.jsx** add button to render() with _onClick_ attribute:
    ```
    render() {
        return (
          <div>
            <input onChange={this.handleChange} placeholder="Enter something..."></input>
            <ChildComponent handleClick={ this.handleClick } message={ this.state.message }></ChildComponent>
            <button onClick={this.showChildComponent}>Show/Hide</button>
          </div>
        );
    }
    ```
5.  In **ParentComponent.jsx**, wrap ChildComponent in inline logical operator brace:
    ```
    {this.state.show &&
          <ChildComponent handleClick={ this.handleClick } message={ this.state.message }></ChildComponent>
    }
    ```
    
##  Render Lists

1.  Replace the code in the inline logical operator brace with:
    ```
    {this.state.list.map(item => {
          return <ChildComponent key={item} handleClick={ this.handleClick } message={ this.state.message }></ChildComponent>
        })
        }
    ```


    



    
    
  
