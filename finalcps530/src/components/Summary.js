import React from 'react';

class Summary extends React.Component {
  render(){
    document.body.style.background = "url('https://i.imgur.com/RT5pOJu.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    return (

      <div class="whiteContainer">

      <h1 class = "sh1">
      Summary Snapshot
      </h1>

      <h2>
      Frontend Framework: ReactJS
      </h2>
      <p>
      ReactJS is an open source JavaScript library designed for
      creating rich and engaging web apps fast and efficiently with minimal coding.
      The core objective of ReactJS is providing the best possible rendering performance.
      Its strength comes from the focus on individual components. Instead of working
      on the entire web app, ReactJS allows a developer to break down the complex
      UI into simpler components.
      </p>
      <h1 class="simage1">
      <img src="https://cdn-images-1.medium.com/max/1600/1*QC9WrTuSyUnoOEDuFAz1OA.png"
      alt="Header" width="1000" height="333" ></img></h1>

      <br></br>

      <h3>
      Popularity:
      </h3>
      <ul>
      <li>
      Today, ReactJS has become highly popular because of its extra simplicity
      and flexibility. Many people are even referring to it as the future of web
      development. It is estimated that more than 1,300 developers and over 94,000
      sites utilize ReactJS.
      Part of this huge popularity comes from the fact that top corporations
      such as Facebook, PayPal, Uber, Instagram, and Airbnb use it to solve user
      interface related issues. This credibility has drawn a lot of people to the framework.
      </li>
      </ul>
      <h3>
      Strengths:
      </h3>


      <ul>
      <li>
      ReactJS is efficient: ReactJS creates its own virtual DOM (Document Object Model)
      where components actually live. This approach gives enormous
      flexibility and amazing gain in performance. ReactJS also calculates
      which changes needed to be made in DOM which avoids expensive DOM operations
       and make efficent updates.
      </li>
      </ul>
      <h1 class="simage1">
      <img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-and-why-reactjs/Images/image005.jpg" alt="DOM picture" ></img></h1>
      <ul>
      <br></br>
      <li>
      It makes writing Javascript easier: ReactJS uses a special syntax called
      JSX, which allows HTML to mix with Javascript. The user can add
      HTML in the render function without having to concatenate strings.
      ReactJS turns those bits of HTML into functions with a special JSXTransformer.
      </li>

      <br></br>
      <li>
      ReactJS has the ability to reuse code components of a different level
      which means significant time is saved by using these components.
      </li>
      <br></br>
      <li>
      ReactJS stands out because it can run on the server unlike Javascript frameworks.
      The virtual DOM will be rendered to the browser as a regular web page
      which means search engines will not have trouble reading the applications
      </li>
      <br></br>
      <li>
      UI Test Cases: It is extremely easy to write UI test cases because the virtual
      DOM system implemented entirely in JS making it work great for working in teams.
      </li>


      <br></br>
      <li>
      The user interface code is readable and maintainable.
      </li>
      <br></br>

      </ul>

      <h3>
      Weaknesses:
      </h3>
      <ul>
      <li>
      ReactJS is only a view layer.
      </li>
      <br></br>
      <li>
      Integrating ReactJS into a traditional MVC framework such as rails would
      require some configuration (i.e., substituting erb with React.js).
      </li>
      <br></br>
      <li>
      There is a learning curve for beginners who are new to web dev
      </li>
      </ul>
      <br></br>

      <h2>
      Backend Framework: Node JS
      </h2>
      <p>
      Node.js is an efficient application runtime environment that writes
      server-side applications in JavaScript. It's ability to use JavaScript
      on both frontend and backend opens new avenues for development.
      </p>
      <h1 class="simage1">
      <img src="https://railsware.com/blog/wp-content/uploads/2018/09/2400х1260-rw-blog-node-js.png" height="400" width="850" alt="DOM picture" ></img></h1>

      <h3>
      Popularity:
      </h3>
      <ul>
      <li>
      It comes as no surprise that so many big companies
      have leveraged Node.js in production.
      </li>
      <br></br>
      <li>
      JavaScript is one of the most
      popular programming language, so any application’s Node.js codebase will be
      easier for more programmers to understand.
      </li>
      <br></br>
      <li>
      Joyent became one of the first companies to use Node.js for its
      mobile application backend. The technology is now used by many
      technology leaders, such as Uber, eBay, Walmart, and Netflix.
      </li>
      <br></br>
      <li>
      A good example of a company which has increased productivity is PayPal.
      It took half the number of people to build this
      application and it was created in less time with high productivity from developers.
      </li>


      </ul>
      <h1 class="simage1">
      <img src="https://www.altexsoft.com/media/2016/11/interest-in-node.js-over-time.png"
      alt="Header" width="900" height="333" ></img></h1>

      <h3>
      Strengths:
      </h3>
      <ul>
      <li>
      Node.js comes with comes with many APIs suitable for backend development,
      e.g. the support for file systems, http requests, streams, child processes, etc.
      </li>
      <br></br>
      <li>
      In web app development, HTTP request and response are considered as the
      two separate events which are actually data streams. This function can
      be used to the maximum with Node.js to create some of the best attributes,
      such as processing files at the time of loading, as this can reduce the
      overall duration of the process when the data is presented in the form of transmissions.
      </li>
      <br></br>
      <h1 class="simage1">
      <img src="https://cdn-images-1.medium.com/max/1600/1*85rq5kza9jd6MEbZmeFBGA.jpeg"
      alt="Header" width="800" height="400" ></img></h1>
      <br></br>
      <li>
      Better efficiency and overall developer productivity: Using Node.js as a server technology is efficient since the same language can
      be used on both front and back end. This brings more cross-functionalality leading to lower development costs.
      </li>
      <br></br>
      <li>
      Huge number of free tools: Node.js has a great package manager, npm, and the amount of available o
      pen-source tools in npm’s registry is huge and growing fast.
      </li>
      <br></br>
      <li>
      Speed and performance: Node.js acts as a fast suite since it runs on the V8 engine developed by
      Google. It uses JavaScript into native machine code allowing it to operate at a fast speed.
      </li>
      <br></br>




      </ul>

      <h3>
      Weaknesses:
      </h3>
      <ul>
      <li>
      Node.js is based on an event-driven, non-blocking I/O model,
      and uses only a single CPU core. CPU-heavy operations will just block incoming
      requests, making the biggest advantage of Node.js useless.
      </li>
      <br></br>
      <li>
      Many packages for Node.js applications are available in npm, however packages vary in their quality.
      Developers can still encounter issues with packages supported only by individual users
      and not maintained properly; for instance, when connecting the Node app to an obscure or old database system.
      </li>
      </ul>


      </div>
    );
  }
}


export default Summary;
