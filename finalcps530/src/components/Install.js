import React from 'react';


class Install extends React.Component{
  render(){
    document.body.style.background = "url('https://i.imgur.com/5EJFODs.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    return (
      <div className="whiteContainer">
        <h1>Front-End Framework: ReactJS</h1>
        <br></br>
        <h2>What is ReactJS?</h2>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
        <h2>Installation Using npm</h2>
        <h3>Requirements to use npm</h3>
        <p>npm stands for "Node Pacakge Manager" and must be previously downloaded before you can use it in your command prompt to download packages. For this example we will be downloading <code> Node.Js</code> before we start installing our frameworks. Press on the button and select the proper download for your device.</p>
        <br></br>
        <a href="https://nodejs.org/en/download/" className="button hover"> Download Node.JS </a>
        <h3>Step 1: Locating Terminal/Command Prompt</h3>
        <p> First start off by opening up your computers terminal. On your computer's search bar look for the "Command Prompt" (Windows) or "Terminal" (Linux/Mac).  </p>
        <p> The images bellow is an example of openning the terminal on a Windows device</p>
        <div className="row">
          <div className="column">
            <img className="images"src="https://i.imgur.com/9vlSTvH.jpg" alt="command Prompt" width="500px" height="200px"></img>
          </div>
          <div className="column">
            <img className="images"src="https://i.imgur.com/RKEelv3.jpg" alt="terminal" width="500px" height="200px"></img>
          </div>
        </div>
        <br></br>
        <h3> Step 2: Downloading React</h3>
        <p>Installing the <code>React</code> pacakge contains only the functionality necessary to define React Components. Usually it is used with a React renderer such as <code> React-dom</code> for website</p>
          <div className="row">
            <div className="column">
              <p> To download just the <code> React</code> functionallity run the code</p>
              <pre> npm install -- save react</pre>
              <img className="images"src="https://i.imgur.com/RrmGdZn.jpg" alt="just react" width="500px" height="200px"></img>
            </div>
            <div className="column">
              <p> To download the renderer for websites along with <code> React</code> run the code</p>
              <pre>npm install --save react-dom</pre>
              <img className="images"src="https://i.imgur.com/eSYQS1c.jpg" alt="react-dom" width="500px" height="200px"></img>
            </div>
          </div>
        <br></br>
        <h1>Back-End Framework: NodeJS</h1>
            <br></br>
        <h2>Downloading NodeJS</h2>
        <p>It is listed above in the green button</p>
      </div>
    );
  }
}

export default Install;
