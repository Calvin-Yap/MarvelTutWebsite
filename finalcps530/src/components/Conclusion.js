import React from 'react';

class Conclusion extends React.Component{
  render(){
    document.body.style.background = "url('https://i.imgur.com/l4ERGDs.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";    return (
      <div className="whiteContainer">
      <h1 class="simage1"> Conclusion </h1>
      <p class = "conclusion">
      Our experience with the frameworks went quite well. Both ReactJS and NodeJS
      performed to our expectations. NodeJS and ReactJS were easy to install, however
      ReactJS had many packages to install making it a bit time consuming. Creating the
      pages was a great learning experience as we got to research both NodeJS and React and
      compare them with languages we are familiar with. It was interesting to see the endless
      possibilties of ReactJS, it is a great front end langauge with many interactive features.
      Compared to HTML/CSS ReactJS was a bit challenging to learn as there is a steep
      learning curve for beginners. NodeJS was easier to learn because it is very similar to
      JavaScript which we all had some expeirience with. In retrospect, our wesbite turned out
      amazing, if we had more time we may have had the chance to incorperate even more ReactJS features
      to make the website more interactive. Overall, we do not regret the choice of frameworks as
      it was a wonderful learning experience and everything turned out better than we imagined.
      </p>

      <h1 class = "simage1"><img src = "https://media.giphy.com/media/fA6opG8tgo2KQ/giphy.gif" alt ="navigation bar" height="300"></img></h1>
      </div>
    );
  }
}

export default Conclusion;
