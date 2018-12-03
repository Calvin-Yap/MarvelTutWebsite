import React from 'react';
import { NavLink }  from "react-router-dom";


class Tutorial extends React.Component {
  render(){
    document.body.style.background = "url('https://i.imgur.com/YvvvayG.jpg') no-repeat center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    return (
      <div className="whiteContainer">


        <h1 class="simage1">Creating a webite with ReactJS (front end) and NodeJS (back end) </h1>
        <p>This tutorial will go over how to make an interactive marvel website with
        a slideshow and a searchbar which allows users to search a marvel superhero,
        and returns comic books of these characters. </p>
        <ol>
        <li class="tsteps">
        Install Node.js and react
        </li>
        <ul>
        In order to follow along with this tutorial, the user must download Node.js and
        ReactJS before beginning. Visit the "Installation" page or click on the link below to be redirected to it.
        </ul>
        <br></br>
        <NavLink to="/install" alt ="button" className="button2 hover" >Install Page</NavLink>
        <br></br><br></br>
        <li class="tsteps">
        Create a navigation bar:
        </li>
        <ul>
        The code below shows how to create a marvel navigation bar as pictured.
        It adds creativity to the page and allows users to easily browse through the page.
        </ul>

        <h1 class = "simage1"><img src = "https://i.postimg.cc/MTrJynhT/Nav.png" alt ="navigation bar" height="122"></img></h1>
        <ul className="tinstructions">
        &lt;ul className="test"><br></br><br></br>
          &lt;li> &lt;img className="logo2" src="http://thetechnews.com/wp-content/uploads/2018/03/2_The-latest-Marvel-logo.jpg" alt="logo">&lt;/img>&lt;/li> <br></br> <br></br>
          &lt;li className="test2">&lt;a href="#home">Home&lt;/a>&lt;/li><br></br><br></br>
          &lt;li className="test2">&lt;a href="#news">News&lt;/a>&lt;/li><br></br><br></br>
          &lt;li className="test2">&lt;a href="#contact">Movies&lt;/a>&lt;/li><br></br><br></br>
          &lt;li className="test2">&lt;a href="#about">Comics&lt;/a>&lt;/li><br></br><br></br>
          &lt;li className="test2">&lt;h1>Where Heros Come Alive&lt;/h1>&lt;/li><br></br><br></br>
        &lt;/ul>
        </ul>
        <br></br>


        <li class="tsteps">
        Create a slideshow
        </li>
        <ul>
        The code below shows how to create a marvel slideshow. This slideshow is like a mini
        movie which changes between multiple pictures of marvel superheroes. This adds
        personality to the website as shown below.
        </ul>

        <h1 class = "simage1"><video width="1100" controls src="https://i.imgur.com/qbL0B8E.mp4" type="video/mp4">
        </video></h1>
        <ul className="tinstructions">
        &lt;div id="slider"><br></br><br></br>
              &lt;div id="first"><br></br><br></br>
              &lt;h1 className="button3 hover"> Become the Hero of Today&lt;/h1><br></br><br></br>
              &lt;/div><br></br><br></br>
            &lt;/div><br></br><br></br>
        </ul>

        <br></br>


        <li class="tsteps">
        Create a latest news table
        </li>
        <ul>
        The code below shows how to create a marvel news table. Many websites have this function
        as it keeps users updated on events going on. This specific table consists of the
        4 most recent events, as shown below.
        </ul>
        <h1 class = "simage1"><img src = "https://i.postimg.cc/N0DcjJDR/article.png" alt ="latest news" height="400"></img></h1>
        <ul className="tinstructions">
        &lt;div className="greyBox"><br></br><br></br>
        &lt;h1 className="late">Latest&lt;/h1><br></br><br></br>
          &lt;br>&lt;/br><br></br><br></br>
            &lt;div className="row"><br></br><br></br>
            &lt;div className="column3"><br></br><br></br>
              &lt;img className="latest" src="https://i.imgur.com/s7hKP9f.jpg" alt="arcticle 1">&lt;/img><br></br><br></br>
                &lt;h3>Comics&lt;/h3><br></br><br></br>
            &lt;h2 className="red">Dead Man Logan&lt;/h2><br></br><br></br>
            &lt;h4>1 hour ago&lt;/h4><br></br><br></br>
            &lt;/div><br></br><br></br>
            &lt;div className="column3"><br></br><br></br>
              &lt;img className="latest" src="https://i.imgur.com/Dyvhg0A.jpg" alt="arcticle 2">&lt;/img><br></br><br></br>
                &lt;h3>Podcasts&lt;/h3><br></br><br></br>
                &lt;h2 className="red"> This Week in Marvel&lt;/h2><br></br><br></br>
                &lt;h4>4 hour ago&lt;/h4><br></br><br></br>
            &lt;/div><br></br><br></br>
            &lt;div className="column3"><br></br><br></br>
              &lt;img className="latest" src="https://i.imgur.com/fPDRwsA.jpg" alt="arcticle 3">&lt;/img><br></br><br></br>
              &lt;h3>Tv Shows&lt;/h3><br></br><br></br>
              &lt;h2 className="red">Black Panter Finale&lt;/h2><br></br><br></br>
              &lt;h4>6 hour ago&lt;/h4><br></br><br></br>
            &lt;/div><br></br><br></br>
            &lt;div className="column3"><br></br><br></br>
              &lt;img className="latest" src="https://i.imgur.com/b4dA6GH.jpg" alt="arcticle 4">&lt;/img><br></br><br></br>
                &lt;h3>Comics&lt;/h3><br></br><br></br>
              &lt;h2 className="red">Deadpool Vs. SpiderMan&lt;/h2><br></br><br></br>
              &lt;h4>9 hours ago&lt;/h4><br></br><br></br>

            &lt;/div><br></br><br></br>
          &lt;/div><br></br><br></br>
        &lt;/div><br></br><br></br>
      </ul>
        <br></br>


        <li class="tsteps">
        Create a comics searcher
        </li>
        <ul>
        The code below shows how to create a marvel comic searcher. This searcher takes in the input from
        the user and processes it to produce the appropriate output. It also includes
        a need help area if the user is having trouble inputting information. An example of input
        is "deadpool" and this will output all the deadpool comics as well as a background page change.
        This tool makes it easy for users to find what they are looking for and it is easy to find as
        pictured below.
        </ul>
        <h1 class = "simage1"><img src = "https://i.postimg.cc/L5cdbr4F/search.png" alt ="comic searcher" height="200"></img></h1>
        <ul className="tinstructions">
        &lt;div className="whiteContainer3"> <br></br><br></br>
          &lt;h1>COMICS SEARCHER&lt;/h1> <br></br><br></br>
            &lt;div className="dropdown"> <br></br><br></br>
              &lt;span>&lt;h3>Need Help? Mouse Over Me&lt;/h3>&lt;/span> <br></br><br></br>
              &lt;div className="dropdown-content"> <br></br><br></br>
                &lt;p>Check your spelling any wrong Hero names will not be searched for and if you put an incorrect name the background will turn red to notify you&lt;/p> <br></br><br></br>
                &lt;p>lower case and uppercase does not matter&lt;/p> <br></br><br></br>
                &lt;p>Search for Heros using their exact name like:&lt;/p> <br></br><br></br>
                &lt;p>Deadpool&lt;/p> <br></br><br></br>
                &lt;p>Iron Man&lt;/p> <br></br><br></br>
                &lt;p>Silver Surfer&lt;/p> <br></br><br></br>
                &lt;p>Results not loading up? Just wait a bit!&lt;/p> <br></br><br></br>
              &lt;/div> <br></br><br></br>
            &lt;/div> <br></br><br></br>
        &lt;Form <br></br><br></br>
          handleChange=&#123this.handleChange} <br></br><br></br>
          post=&#123this.state.post} <br></br><br></br>
          handleSubmit=&#123this.handleSubmit} <br></br><br></br>
        /><br></br><br></br>
      &lt;ul className="list"><br></br><br></br>
            &#123data.map(item => (<br></br><br></br>
              &lt;li key=&#123item.id} class="list_inside"> <br></br><br></br>
              &#123item.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? <br></br><br></br>
              &lt;div class="comic"> <br></br><br></br>
                &lt;div class="pic"> <br></br><br></br>
                  &#123&lt;img src=&#123`$&#123item.thumbnail.path}/portrait_incredible.$&#123item.thumbnail.extension}`} title=&#123item.title} alt="comic">&lt;/img>} <br></br><br></br>
                &lt;/div> <br></br><br></br>
                &lt;div class="data"> <br></br><br></br>
                  &#123item.title ? &lt;div class="name">&lt;b>&lt;u>&lt;a class="dl" href=&#123item.urls[0].url} target="_blank">&#123item.title}&lt;/a>&lt;/u>&lt;/b>&lt;/div> : null} <br></br><br></br>
                  &#123item.upc ? &lt;div>&lt;b>Upc:&lt;/b> &#123item.upc}&lt;/div> : null} <br></br><br></br>
                  &#123item.pageCount ? &lt;div>&lt;b>Pages:&lt;/b> &#123item.pageCount}&lt;/div> : null} <br></br><br></br>
                  &#123item.format ? &lt;div>&lt;b>Format:&lt;/b> &#123item.format}&lt;/div> : null} <br></br><br></br>
                  &#123item.prices[0].price ? &lt;div>&lt;b>Price:&lt;/b> $&#123item.prices[0].price} &lt;/div>: null} <br></br><br></br>
                  &#123item.creators.items.map(artist => ( <br></br><br></br>
                    &lt;div key=&#123artist}> &lt;b>&#123this.Capitalize(artist.role)}:&lt;/b> &#123artist.name} &lt;/div> <br></br><br></br>
                  ))} <br></br><br></br>
                &lt;/div> <br></br><br></br>
                &lt;/div> : null} <br></br><br></br>
              &lt;/li> <br></br><br></br>
            ))} <br></br><br></br>
        &lt;/ul>
        <br></br>
        </ul>
        <br></br>


        <li class="tsteps">
        Create a footer
        </li>
        <ul>
        The code below shows how to create a marvel footer. It is designed to be clean
        and easy to read as shown below.
        </ul>
        <h1 class = "simage1"><img src = "https://i.postimg.cc/tRwHJV3v/footer.png" alt ="footer" height="222"></img></h1>
        <ul className="tinstructions">
        &lt;footer><br></br><br></br>
          &lt;img className="footer" src="https://i.imgur.com/GUzYyC3.jpg" alt="footer banner">&lt;/img><br></br><br></br>
          &lt;p className="footerText">Terms of Use &emsp;Privacy Policy  &emsp; Children's Online Privacy &emsp; Policy License Agreement &emsp; Interest-Based Ads Marvel &emsp; Insider Terms  &emsp;©2018 MARVEL&lt;/p> <br></br><br></br>
          &lt;/footer> <br></br><br></br>
        <br></br>
        </ul>
        <br></br>
          <li class="tsteps">
          CSS Page
          </li>
          <ul>
          The code below is the css page that we used to create this page.
          </ul>
          <ul className="tinstructions">

          div.nav&#123;<br></br>
  position:absolute;<br></br>
    top: 0;<br></br>
    width: 100%;<br></br>
    background: #000000;<br></br>
    color:#ffffff;<br></br>
    height: 110px;<br></br>
    box-shadow: 0 0 25px 0 black;<br></br>

}<br></br><br></br>

ul.test &#123;<br></br>
  border: solid;<br></br>
  border-color: #A9A9A9;<br></br>
    top: 15%;<br></br>
  width: 96.6%;<br></br>
    list-style-type: none;<br></br>
    margin: 0;<br></br>
    height: 131px;<br></br>
    overflow: hidden;<br></br>
    background-color: #000000;<br></br>
}<br></br><br></br>

li.test2 &#123;<br></br>
  float: left;<br></br>
  padding-left:6%;<br></br>
}<br></br><br></br>

li.test2 a &#123;<br></br>
  float: none;<br></br>
  font-family: 'Lato', sans-serif;<br></br>
  font-weight: bold;<br></br>
  font-size: 170%;<br></br>
  padding-top: 15%;<br></br>
  padding-right: 20%;<br></br>
  padding-left: 25%;<br></br>
  display:inline-block;<br></br>
  line-height: normal;<br></br>
  text-decoration: none;<br></br>
  color:  #ED1D24;<br></br>
}<br></br><br></br>
li h1&#123;<br></br>
  color: white;<br></br>
  font-size: 200%;<br></br>
  font-family: 'Lato', sans-serif;<br></br>
  padding-top: 1%;<br></br>
  width: 100%;<br></br>
  padding-left: 30%;<br></br>
}<br></br><br></br>

.normal&#123;<br></br>
    float: none;<br></br>
    font-family: 'Lato', sans-serif;<br></br>
    font-weight: bold;<br></br>
    font-size: 130%;<br></br>
    padding-top: 2.6%;<br></br>
    padding-right: 5.3%;<br></br>
    padding-left: 1.5%;<br></br>
    display:inline-block;<br></br>
    line-height: normal;<br></br>
    text-decoration: none;<br></br>
    color: #ffffff;<br></br>
    overflow: hidden;<br></br>
    -o-transition:.7s;<br></br>
    -ms-transition:.7s;<br></br>
    -moz-transition:.7s;<br></br>
    -webkit-transition:.7s;<br></br>
    transition: .7s<br></br>
}<br></br><br></br>
a.normal:hover&#123;<br></br>
  color: red;<br></br>
}<br></br><br></br>


img.logo &#123;<br></br>
    float: left;<br></br>
    height: 100%;<br></br>
    width: 13%;<br></br>
    padding-right: 2%;<br></br>
    padding-left: 2%;<br></br>
  }<br></br><br></br>
img.logo2 &#123;v
      float: left;<br></br>
      height: 130px;<br></br>
  }<br></br><br></br>
a.data&#123;<br></br>
  font-size: 100%;<br></br>
}<br></br><br></br>
  h1.error&#123;<br></br>
  text-align: center;<br></br>
  padding-top: 15%<br></br>
}<br></br><br></br>
.whiteContainer&#123;<br></br>
      background-color: white;<br></br>
      width: 80%;<br></br>
      padding: 25px;<br></br>
      margin-left: 130px;<br></br>
      margin-right: 80px;<br></br>
      margin-top: 150px;<br></br>
      box-shadow: 0 0 25px 0 black;<br></br>
}<br></br><br></br>
<br></br>
.whiteContainer2&#123;<br></br>
      background-color: white;<br></br>
      margin-top: 150px;<br></br>
      width: 96.5%;<br></br>
      padding: 25px;<br></br>

}<br></br><br></br>
.whiteContainer3&#123;<br></br>
      opacity: 0.9;<br></br>
      background-color: white;<br></br>
      width: 96.5%;<br></br>
      padding: 25px;<br></br>

}<br></br><br></br>
div.bigbox&#123;<br></br>
  margin-left: 130px;<br></br>
  margin-right: 80px;<br></br>
  box-shadow: 0 0 25px 0 black;<br></br>

}<br></br><br></br>
.name&#123;<br></br>
  font-size: 175%;<br></br>
  flex: auto;<br></br>
  width: auto;<br></br>
}<br></br><br></br>

a.dl&#123;<br></br>
  color: #f0131e;<br></br>
}<br></br><br></br>

input&#123;<br></br>
      height: 70px;<br></br>
      font-size: 50px;<br></br>
      background-color: white;<br></br>
      width: 100%;<br></br>
      border: solid black;<br></br>
      border-radius: 15px;<br></br>
      -moz-border-radius: 13px;<br></br>
      -webkit-border-radius: 13px;<br></br>
}<br></br><br></br>
input:focus&#123;<br></br>
    outline: none;<br></br>
}<br></br><br></br>
button, input[type="submit"], input[type="reset"] &#123;<br></br>
	background: none;<br></br>
	color: inherit;<br></br>
	border: none;<br></br>
	padding: 0;<br></br>
	font: inherit;<br></br>
	cursor: pointer;<br></br>
	outline: inherit;<br></br>
}<br></br><br></br>
.images&#123;<br></br>
  border-style: solid;<br></br>
  border-width: 3px;<br></br>
  border-color: #808080	;<br></br>
  display: block;<br></br>
}<br></br><br></br>
.images2&#123;<br></br>
  border-style: solid;<br></br>
  border-width: 3px;<br></br>
  border-color: #808080	;<br></br>
  display: block;<br></br>
  object-fit: cover;<br></br>
  width: 70%;<br></br>
  height:80%;<br></br>
  margin-left: 40px;<br></br>
}<br></br><br></br>
.row &#123;<br></br>
    display: flex;<br></br>
}<br></br><br></br>

h2&#123;<br></br>
  margin: 0;<br></br>
}<br></br><br></br>
h1&#123;<br></br>
  margin:10px;<br></br>
}<br></br><br></br>
.column &#123;<br></br>
  flex: 50%;<br></br>
  padding-left: 50px;<br></br>
  height: auto;<br></br>
}<br></br><br></br>
.datacolumn&#123;<br></br>
  flex: 50%;<br></br>
  padding-left: 50px;<br></br>
  height: auto;<br></br>
  border-bottom: 2px solid black;<br></br>
}<br></br><br></br>
.column1&#123;<br></br>
  flex: 50%;<br></br>
}<br></br><br></br>
.column2&#123;<br></br>
  flex:25%;<br></br>
  border-bottom: 2px solid black;<br></br>
}<br></br><br></br>
.column3&#123;<br></br>
  flex:25%;<br></br>
  padding-left: 1%;<br></br>
}<br></br><br></br>
.column4&#123;<br></br>
  flex:25%;<br></br>

}<br></br><br></br>
img.latest&#123;<br></br>
  height: 50%;<br></br>
  width: 95%;<br></br>
  border: solid;<br></br>
  border-color: black;<br></br>
  border-radius: 10px;<br></br>
}<br></br><br></br>
.button &#123;<br></br>
  font: normal 40px Helvetica;<br></br>
  text-decoration: none;<br></br>
  background-color: #418e56;<br></br>
  color: #ffffff;<br></br>
  padding: 5px 10px 5px 10px;<br></br>
  border-radius: 10px;<br></br>
  border-style: solid;<br></br>
  border-width: 2px;<br></br>
  border-color:black;<br></br>
  box-shadow: 0 0 5px 0 blue;<br></br>
  margin-left: 33%;<br></br>
}<br></br><br></br>
.button2 &#123;<br></br>
  font: normal 40px Helvetica;<br></br>
  text-align: center;<br></br>
  text-decoration: none;<br></br>
  background-color: #0e69f9;<br></br>
  color: #ffffff;<br></br>
  padding: 10px 10px 10px 10px;<br></br>
  border-radius: 10px;<br></br>
  border-style: solid;<br></br>
  border-width: 2px;<br></br>
  border-color:black;<br></br>
  box-shadow: 0 0 5px 0 blue;<br></br>
  margin-left: 40%;<br></br>
}<br></br><br></br>
.button3&#123;<br></br>
  font: normal 20px Helvetica;<br></br>
  text-align: center;<br></br>
  text-decoration: none;<br></br>
  background-color:  #ED1D24;<br></br>
  color: #ffffff;<br></br>
  font-weight: bold;<br></br>
  width: 60%;<br></br>
  height: 40%;<br></br>
  margin: 20px;<br></br>
  transform: skew(50deg);<br></br>

}<br></br><br></br>
.button:hover &#123;<br></br>
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);<br></br>
}<br></br><br></br>
.button2:hover &#123;<br></br>
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);<br></br>
}<br></br><br></br>

.sh1 &#123;<br></br>
  text-align:center;<br></br>
}<br></br><br></br>

.simage1&#123;<br></br>
  text-align:center;<br></br>
}<br></br><br></br>

.tsteps&#123;<br></br>
  font-weight: bold;<br></br>
  font-size: 20px;<br></br>
}<br></br><br></br>

.conclusion&#123;<br></br>
  font-size: 20px;<br></br>
}<br></br><br></br>

.tinstructions&#123;<br></br>
  background-color: #DFDFDF;<br></br>
  padding: 13px;<br></br>
  font-family: 'Roboto Mono', monospace;<br></br>
}<br></br><br></br>


code&#123;<br></br>
  background-color: #e8e8e8;<br></br>
}<br></br><br></br>

.list&#123;<br></br>
  list-style-type: none;<br></br>
  padding: 0;<br></br>
}<br></br><br></br>
.comic &#123;<br></br>
  padding-bottom: 0.5%;<br></br>
  padding-top: 0.5%;<br></br>
  border-bottom: 2px solid black;<br></br>
  overflow:scroll;<br></br>
}<br></br><br></br>
::-webkit-scrollbar &#123;<br></br>
    display: none;<br></br>
}<br></br><br></br>
.pic&#123;<br></br>
  display:inline-block;<br></br>
  padding-right: 1%;<br></br>
}<br></br><br></br>
.data&#123;<br></br>
  display:inline-block;vertical-align:top;<br></br>
  word-wrap:  break-word;<br></br>
  width: 830px;<br></br>
  overflow: hidden;<br></br>
  height: auto;<br></br>
}<br></br><br></br>
#slider&#123;<br></br>
  padding-top: 300px;<br></br>
  width:94.6%;<br></br>
  height: 150px;<br></br>
  background-size: cover;<br></br>
  padding-left: 60px;<br></br>
  animation: slide 40s infinite;<br></br>
  border: ridge;<br></br>
  border-width: 5px;<br></br>

}<br></br><br></br>
@keyframes  slide &#123; <br></br>
  0%&#123; <br></br>
    background: url(1.jpg); <br></br>
    max-width: 100%; <br></br>
    max-height: 100%; <br></br>
    background-size: cover; <br></br>
    background-attachment: fixed; <br></br>
  } <br></br><br></br>
  25%&#123; <br></br>
    max-width: 100%; <br></br>
    max-height: 100%; <br></br>
    background: url(2.jpg); <br></br>
    background-size: cover; <br></br>
    background-attachment: fixed; <br></br>
  } <br></br><br></br>
  50%&#123; <br></br>
    max-width: 100%; <br></br>
    max-height: 100%; <br></br>
    background: url(3.jpg); <br></br>
    background-size: cover; <br></br>
background-attachment: fixed; <br></br>
  } <br></br><br></br>
  75%&#123; <br></br>
    background: url(4.jpg); <br></br>
  max-width: 100%; <br></br>
   max-height: 100%; <br></br>
   background-size: cover; <br></br>
   background-attachment: fixed; <br></br>
  } <br></br><br></br>
  100%&#123; <br></br>
    max-width: 100%; <br></br>
   max-height: 100%; <br></br>
    background: url(5.jpg); <br></br>
    background-size: cover; <br></br>
    background-attachment: fixed; <br></br>
  } <br></br><br></br>
} <br></br><br></br>


 #first &#123; <br></br>
    opacity: 0.9; <br></br>
    width: 440px; <br></br>
  	height: 70px; <br></br>
    transform: skew(-50deg); <br></br>
    padding-left: 70px; <br></br>
    padding-top: 5px; <br></br>
    border: solid; <br></br>
    border-color: #ffffff; <br></br>
  	background: #ED1D24; <br></br>
   } <br></br><br></br>

div.greyBox&#123; <br></br>
  background-color: lightgrey; <br></br>
  width: 99.6%; <br></br>
  height: 440px; <br></br>
  border-style:ridge; <br></br>
  border-width: 5px; <br></br>
} <br></br><br></br>
h1.late &#123; <br></br>
padding: 13px; <br></br>
display: inline; <br></br>
font: 70px Helvetica, Sans-Serif; <br></br>
letter-spacing: -5px; <br></br>
color: #ED1D24; <br></br>
} <br></br><br></br>
h2.red&#123; <br></br>
  color: #ED1D24; <br></br>
} <br></br><br></br>

.late:after &#123; <br></br>
  padding: 20px; <br></br>
content: "News"; <br></br>
color: white; <br></br>
} <br></br><br></br>
footer&#123; <br></br>
  border: ridge; <br></br>
  border-width: 5px; <br></br>
  height: 240px; <br></br>
  width: 99.6%; <br></br>
  padding-top: 2%; <br></br>
  text-align: center; <br></br>

  background: #000000; <br></br>
} <br></br><br></br>
img.footer&#123; <br></br>
  width: 96%; <br></br>

} <br></br><br></br>
.footerText&#123; <br></br>
    text-align: center; <br></br>
  color: #ffffff; <br></br>
} <br></br><br></br>
.footerText:hover&#123; <br></br>
  color: red; <br></br>
} <br></br><br></br>

.dropdown &#123; <br></br>
    position: relative; <br></br>
    display: inline-block; <br></br>
} <br></br><br></br>

.dropdown-content &#123; <br></br>
    display: none; <br></br>
    position: absolute; <br></br>
    background-color: #f9f9f9; <br></br>
    min-width: 500px; <br></br>
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); <br></br>
    padding: 12px 16px; <br></br>
    z-index: 1; <br></br>
} <br></br><br></br>

.dropdown:hover .dropdown-content &#123; <br></br>
    display: block; <br></br>
} <br></br><br></br>

          <br></br>
          </ul>



        </ol>

      </div>
    );
  }
}

export default Tutorial;
