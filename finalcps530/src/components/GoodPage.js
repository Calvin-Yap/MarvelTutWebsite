
import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import Form from "./Search";
const API = 'https://gateway.marvel.com:443/v1/public/characters';
const API_KEY = 'a7299e57cd492f3f40aab83e1ec12e05';

class GoodPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        name: "",
      },
      jobs: [],
      data: [],
      code: 0,
      pic: "",
      art:[],
      color: "white"
    };
    var style;
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

getData(character, pic) {
    {console.log("second")}
    {console.log(character)}
    fetch(API+'/'+character+"/comics?apikey="+API_KEY)
      .then(response => response.json())
      .then(result => {
        this.setState({
            data: result.data.results,
            pic: pic
        })
      })
    };

    getMetaData(character) {
      var str = character;
      str = str.replace(/\s/g, '%20')
        {console.log("first")}
          fetch(API+"?name="+str+"&apikey="+API_KEY)
            .then(response => response.json())
            .then(result => {
              this.setState({
                  code: (result.data.total > 0 ? result.data.results[0].id : <Redirect to='./Error'/>),
                  pic: (result.data.total > 0 ? result.data.results[0].thumbnail.path : <Redirect to='./Error'/>),
                  color: (result.data.total > 0 ? "green" : "red"),
              })
                document.body.style.background = this.state.color == "red" ? "red" :"url("+this.state.pic+".jpg) no-repeat";
                {this.getData(this.state.code, this.state.pic)}
            })
    };


  handleSubmit = e => {
    e.preventDefault();
    {this.getMetaData(this.state.post.name)}
    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { name: ""}
    }));
  };
  Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    const {data} = this.state;
    return (


<div className="bigbox">
        <div className="whiteContainer2">
          <ul className="test">
            <li><img className="logo2" src="http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg" alt="logo"></img></li>
            <li className="test2"><a href="#home">Home</a></li>
            <li className="test2"><a href="#news">News</a></li>
            <li className="test2"><a href="#contact">Movies</a></li>
            <li className="test2"><a href="#about">Comics</a></li>
            <li className="test2"><h1>Where Heros Come Alive</h1></li>
          </ul>

          <br></br>
          <div id="slider" >
            <div id="first">
            <h1 className="button3 hover"> Become the Hero of Today</h1>
            </div>
          </div>

          <br></br>
          <br></br>
          <div className="greyBox">
          <h1 className="late">Latest</h1>
            <br></br>
              <div className="row">
              <div className="column3">
                <img className="latest" src="https://i.imgur.com/s7hKP9f.jpg" alt="arcticle 1"></img>
                  <h3>Comics</h3>
              <h2 className="red">Dead Man Logan</h2>
              <h4>1 hour ago</h4>
              </div>
              <div className="column3">
                <img className="latest" src="https://i.imgur.com/Dyvhg0A.jpg" alt="arcticle 2"></img>
                  <h3>Podcasts</h3>
                  <h2 className="red"> This Week in Marvel</h2>
                  <h4>4 hour ago</h4>
              </div>
              <div className="column3">
                <img className="latest" src="https://i.imgur.com/fPDRwsA.jpg" alt="arcticle 3"></img>
                <h3>Tv Shows</h3>
                <h2 className="red">Black Panter Finale</h2>
                <h4>6 hour ago</h4>
              </div>
              <div className="column3">
                <img className="latest" src="https://i.imgur.com/b4dA6GH.jpg" alt="arcticle 4"></img>
                  <h3>Comics</h3>
                <h2 className="red">Deadpool Vs. SpiderMan</h2>
                <h4>9 hours ago</h4>

              </div>
            </div>
          </div>



</div>


<div className="whiteContainer3">
          <h1>COMICS SEARCHER</h1>
            <div className="dropdown">
              <span><h3>Need Help? Mouse Over Me</h3></span>
              <div className="dropdown-content">
                <p>Check your spelling any wrong Hero names will not be searched for and if you put an incorrect name the background will turn red to notify you</p>
                <p>lower case and uppercase does not matter</p>
                <p>Search for Heros using their exact name like:</p>
                <p>Deadpool</p>
                <p>Iron Man</p>
                <p>Silver Surfer</p>
                <p>Results not loading up? Just wait a bit!</p>
              </div>
            </div>
        <Form
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
      <ul className="list">
            {data.map(item => (
              <li key={item.id} class="list_inside">
              {item.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ?
              <div class="comic">
                <div class="pic">
                  {<img src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`} title={item.title} alt="comic"></img>}
                </div>
                <div class="data">
                  {item.title ? <div class="name"><b><u><a class="dl" href={item.urls[0].url} target="_blank">{item.title}</a></u></b></div> : null}
                  {item.upc ? <div><b>Upc:</b> {item.upc}</div> : null}
                  {item.pageCount ? <div><b>Pages:</b> {item.pageCount}</div> : null}
                  {item.format ? <div><b>Format:</b> {item.format}</div> : null}
                  {item.prices[0].price ? <div><b>Price:</b> ${item.prices[0].price} </div>: null}
                  {item.creators.items.map(artist => (
                    <div key={artist}> <b>{this.Capitalize(artist.role)}:</b> {artist.name} </div>
                  ))}
                </div>
                </div> : null}
              </li>
            ))}
        </ul>
        <footer>
          <img className="footer" src="https://i.imgur.com/GUzYyC3.jpg" alt="footer banner"></img>
<p className="footerText">Terms of Use &emsp;Privacy Policy  &emsp; Children's Online Privacy &emsp; Policy License Agreement &emsp; Interest-Based Ads Marvel &emsp; Insider Terms  &emsp;©2018 MARVEL</p>
</footer>
    </div>

</div>




    );
  }
}
export default GoodPage;
