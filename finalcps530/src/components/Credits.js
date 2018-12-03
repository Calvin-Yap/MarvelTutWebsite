import React from 'react';

class Credits extends React.Component{
  render(){
    document.body.style.background = "url('https://i.imgur.com/Opls7sT.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        return (
      <div className="whiteContainer">
        <h1>Calvin Yap</h1>
          <div className="row">
            <div className="column2">
              <img className="images2" alt="face" src="https://i.imgur.com/LOFCiIS.jpg"></img>
            </div>
            <div className="datacolumn">
              <h2>Responsibilities</h2>
              <ul>
              <li>Intialized the React App creating the assets and components for each page</li>
              <li>Made a GitHub Repository for this program</li>
              <li>Created the Navigation Bar Using React Router Elements</li>
              <li>Created the Background and Theme of the pages with the white containers</li>
              <li>Created the Front-End section in the instalation page</li>
              <li>Created the Error Page with a redirect to the Homepage</li>
              <li>Created the Credits Page</li>
              <li>Added in the Navigation Bar, Slideshow, Footer, and "Latest News" bar on the Example Page</li>
              <li>Deployed page using FireBase</li>
              </ul>
            </div>
          </div>
        <h1>Deep Patel</h1>
          <div className="row">
            <div className="column2">
              <img className="images2" alt="face" src="https://i.imgur.com/zUu5rKx.jpg"></img>
            </div>
            <div className="datacolumn">
              <h2>Responsibilities</h2>
              <ul>
                <li>Created and obtained access to the Marvel API</li>
                <li>Backend development</li>
                <ul>
                  <li>Process user information and call the API using NodeJS</li>
                  <li>Parsed and extracted information from the JSON information to be displayed which included:</li>
                  <ul>
                    <li>Pictures</li>
                    <li>Names/Links</li>
                    <li>Authors/Creators/Artists</li>
                  </ul>
                </ul>
                <li>Created the front-end layout for the comics page</li>
                <li>Assisted everyone with their front-end formatting</li>
                <li>Made the webpage dynamic</li>
              </ul>
            </div>
          </div>
        <h1>Dilpreet Brar</h1>
          <div className="row">
            <div className="column2">
              <img className="images2"  alt="face" src="https://i.postimg.cc/Sx70gTwH/dilcontact.jpg"></img>
            </div>
            <div className="datacolumn">

            <h2>Responsibilities</h2>
            <ul>

              <li>Created the summary page</li>
              <ul>
              <li>Made the front end layout</li>
              <li>Researched ReactJS and NodeJS including popularity, strengths, weaknesses</li>
              </ul>
              <li>Created the tutorials page</li>
              <ul>
              <li>Made step by step instructions along with descriptions on how to make the example page</li>
              <li>Created the front end layout and embedded pictures and video to go along with appropriate steps</li>
              </ul>
              <li>Created the conclusion page</li>
              <ul>
              <li>Summarized our experience with the frameworks</li>
              <li>Added the marvel gif for a finishing touch</li>
              </ul>

            </ul>
            <br></br>
            <br></br>
              </div>
          </div>

          <h1>References</h1>
          <ul>
            <li>Created the template using the "ReactJS Create an App"</li>
            <li>All background photos are from Microsoft Spotlight</li>
            <br></br>
            <li>Websites Used</li>
            <li>https://think360studio.com/12-benefits-of-using-node-js-for-web-application/
            </li>
            <li>https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/
            </li>
            <li>https://hackernoon.com/top-10-benefits-of-using-nodejs-for-web-app-development-39a0db0fbe4e
            </li>
            <li>https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/
            </li>
            <li>https://www.c-sharpcorner.com/article/what-and-why-reactjs/
            </li>
            <li>http://www.pro-tekconsulting.com/blog/advantages-disadvantages-of-react-js/
            </li>
          </ul>
      </div>
    )
  }
}

export default Credits;
