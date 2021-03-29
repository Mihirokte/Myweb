import logo from './myphoto.jpg';
import des from './desdev.png';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Github, Instagram, Facebook, Linkedin, Envelope, GeoAlt} from 'react-bootstrap-icons';
import { Accordion, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

export default class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/senpaimode" component={Senpai} />
        </div>
      </HashRouter>
    );
  }
}

function Main() {

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Personalised area for friends
    </Tooltip>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div class="col-3 hoverable" id="mycontent" style={{padding:"0px"}}>
          <button class="normal" disabled><img src={des} alt="DEV+DES"  style={{width:"80%", margin:"auto auto"}}></img></button>
          <img src={logo} alt="logo" class="hover border-end border-dark border-2" style={{maxWidth:"100%", height:"100vh"}}/>
        </div>
        <div class="col">
          <div class="row">
            <div class="fw-normal py-4 ps-4 text-white bg col t1" style={{fontSize:"5rem", height:"30%" ,lineHeight:"80px"}}>Mihir Okte</div>
            <div class="col-lg-7 pt-3 bg text-white t2 text-break" style={{fontWeight:"light", fontSize:"0.8rem"}}>
              Hoey! I am BTech Second Year Undergraduate in IIT Delhi from the Department of Mathematics and Computing. 
              I am learning programmer cum developer & a novice graphic designer, besides I am into algorithmic competitive programming(CP) and Web Dev is one of my strong holds.
              The things I like are mainly anime, manga and designing. Sometimes I dance too. This is my portfolio.
              <p class="t4 text-end pe-4">My academic CV is given below.</p> 
            </div>
          </div>
          <div class="row">
            <div class="col m-4 py-3 px-4 border rounded-3 border-2 border-dark">
                <div class="d-flex justify-content-between mb-2">
                  <div class="h2 t1 color">How it's going till now</div>
                </div>
                <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"374px"}} id="example">
                <Card class="my-1">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Web Developer</div><div class="t4 col text-end">Materate Pvt Ltd.</div></div>
                      <div class="row px-3" style={{fontSize:"0.8rem"}}>Designed and implemented and maintaining full responsive web portals for the analysis and testing of student’s progress and competency in mathematics.</div>
                    </div>
                  </Accordion.Toggle>
                </Card>
                <Card class="my-1">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Technical Editor</div><div class="t4 col text-end">BSP, IIT Delhi</div></div>
                    </div>
                  </Accordion.Toggle>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div>
                      <div class="row mb-1"><div class="col t2">Representative & Executive</div><div class="t4 col text-end">IIT Delhi</div></div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" class="t3">
                    <Card.Body>
                    <ul style={{fontSize:"0.9rem"}}>
                      <li class="listele2"><div class="row"><div class="col t2">Academic Mentor</div><div class="t4 col text-end">IIT Delhi</div></div></li>
                      <li class="listele1"><div class="row"><div class="col t2">Dance Representative</div><div class="t4 col text-end">Dance Club IITD</div></div></li>
                      <li class="listele1"><div class="row"><div class="col t2">MathSoc Executive</div><div class="t4 col text-end">MathSoc IITD</div></div></li>
                    </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div class="col pt-2 px-4 m-4">
                <div class="d-flex justify-content-between">
                  <div class="h3 t1 color">Projects</div>
                  <a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark mb-2">Resume (CV)</a>
                </div>


              <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"374px"}} id="example">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    React Based Contributor Finder App
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" class="t3">
                    <Card.Body>
                      This App primarily focused upon finding number of contributors for a desired repository and subsequent details like number of forks, full name etc as well. I created this small app as an assignment of something.
                      <hr></hr>
                      <Github size={18} /><a href="https://github.com/Mihirokte/Mihirokte.github.io/tree/master/ocs" target="_blank" rel="noopener noreferrer" class="link-dark ms-3">For repository, Click here! (No not a Rick Roll)</a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>


            </div>
          </div>
          <div class="row bg text-white text-center t3 ps-4">
              <div class="row justify-content-center my-2">
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Github size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Linkedin size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Instagram size={18} /></a></div>
                <div class="col-1"><a role="button" href="https://drive.google.com/file/d/1eeSWgZw3fI1ncyeqtRUrGXiRGnvGHWhj/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-white bg text-center"><Facebook size={18} /></a></div>
              </div>
              <div class="row justify-content-center mt-2">
                <div class="col-sm-4 text-center" style={{fontSize:"0.9rem"}}><Envelope size={20} /><a role="button" class="text-white text-break" style={{textDecoration: "none"}} href = "mailto: mihirokte77@gmail.com">&nbsp;&nbsp;mihirokte77@gmail.com</a></div>
                <div class="col-sm-4 text-center" style={{fontSize:"0.9rem"}}><GeoAlt size={20} />&nbsp;&nbsp;Gwalior, Madhya Pradesh, India</div>
              </div>

              <div class="row justify-content-center my-2 pb-1">
                <div class="col-5 text-center">Designed and Developed by Mihir Okte</div>
              </div>
          </div>
        </div>
      </div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 50, hide: 400 }}
        overlay={renderTooltip}
      >
        <button class="btn bg fixed-bottom m-3"><Link to="/senpaimode" class="text-white" style={{textDecoration: "none"}}>Senpai Mode</Link></button>
      </OverlayTrigger>
    </div>
  );
}


const opts = {
  height: '230',
  width: '380',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function sort(data){
  var result = [];
  data.map((v) => {
    if(Object.values(v)[0] === 10){
      result.push(v);
    }
  })
  return result;
}

class Senpai extends Component{

  state = {
    com: [],
    wat: []
  }

  getAnime = async (query, variables) => {
    try {
      const response = await axios.post('https://graphql.anilist.co', {
        query,
        variables
      });

      this.setState(() => ({
        com : sort(Object.values(response.data.data.MediaListCollection.lists[1].entries)),
        wat : Object.values(response.data.data.MediaListCollection.lists[2].entries)
      }));

      console.log(this.state.com);
      console.log(this.state.wat);

    } catch (error) {
        console.log(error);
    }
  }

  componentDidMount() {
    const query = `
    query ($username: String, $type: MediaType) {
      MediaListCollection(userName: $username, type: $type) {
        lists {
          entries {
            score(format: POINT_10)
            progress
            media {
              episodes
              title { 
                english
                romaji }
            }
          }
        }
      }
    }
    `;
    
    const variables = {'username' : 'MihirOkte', 'type' : 'ANIME'};
    this.getAnime(query, variables);

  }

  render(){
    const {com, wat} = this.state;

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col fw-normal py-3 text-white text-center t1 bg-2" style={{fontSize:"3rem", height:"30%" ,lineHeight:"80px"}}>ARA ARA! You come to see what's here<button class="btn bg-2 my-content" disabled>&nbsp;&nbsp;&nbsp;</button>
          <button class="btn bg col ms-auto "><Link to="/" class="text-white" style={{textDecoration: "none"}}>OH NO! Go back</Link></button>
        </div>
      </div>
      <div class="row">
      <div class="col pt-2 px-4 my-4 ms-3">
          <div class="d-flex justify-content-between mb-2">
            <div class="h3 t1 color">Currently Watching</div>
          </div>

          <ul class="list-group" style={{overflow:"hidden", overflowY:"scroll",height:"415px"}} id="example">
            {wat ? wat.map((v) => (
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="t2 h5 mt-1">{Object.values(Object.values(Object.values(v)[2])[1])[0] ? Object.values(Object.values(Object.values(v)[2])[1])[0] : Object.values(Object.values(Object.values(v)[2])[1])[1]}</div>
                  <div class="t4 ">Progress: {Object.values(v)[1]}/{Object.values(Object.values(v)[2])[0]}</div>
                </div>
                <span class="badge bg-primary rounded-pill mt-2">{Object.values(v)[0]}/10</span>
              </li>
              ))
              :
              <li class="list-group-item d-flex justify-content-between align-items-start">Loading .. </li>
            }
          </ul>

        </div>
        <div class="col">
          <div class="col pt-2 px-4 my-4">
            <div class="d-flex justify-content-between mb-2">
              <div class="h3 t1 color">My Fav Completed Anime</div>
            </div>

            <ul class="list-group" style={{overflow:"hidden", overflowY:"scroll",height:"415px"}} id="example">
              {com ? com.map((v) => (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="t2 h5 mt-1">{Object.values(Object.values(Object.values(v)[2])[1])[0] ? Object.values(Object.values(Object.values(v)[2])[1])[0] : Object.values(Object.values(Object.values(v)[2])[1])[1]}</div>
                  </div>
                  <span class="badge bg-primary rounded-pill mt-2">{Object.values(v)[0]}/10</span>
                </li>
                ))
                :
                <li class="list-group-item d-flex justify-content-between align-items-start">Loading .. </li>
              }
            </ul>
          
          </div>
          <a class="btn btn-success col ms-4" href="https://anilist.co/user/MihirOkte/animelist" target="_blank" rel="noopener noreferrer" role="button">My Anilist Profile</a>
        </div>

        <div class="col">
          <div class="col m-4 py-3 px-4 border rounded-3 border-2 border-primary">
            <div class="d-flex justify-content-between mb-2">
              <div class="h2 t1 text-primary">Favourite Songs</div>
            </div>
            <Accordion defaultActiveKey="0" class="t2" style={{overflow:"hidden", overflowY:"scroll",height:"383px"}} id="example">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  My Favourite Anime Opening
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="dd7BILZcYAY" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top"/>
                      <div class="card-body">
                        <div>
                          <div class="row h5"><div class="col t2">Hacking to the Gate</div><div class="t4 col text-end">Steins;Gate</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  My Favourite Anime Ending
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="pCC6qbAnX00" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top" />
                      <div class="card-body">
                        <div>
                          <div class="row h5"><div class="col t2">I Beg You</div><div class="t4 col text-end">Fate Heaven's Feel</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  My Favourite Anime OST
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div class="card text-white bg-primary mb-3">
                      <YouTube videoId="289H9XqmmpM" opts={opts} onReady={(e) => e.target.pauseVideo()} className="card-img-top"/>
                      <div class="card-body">
                        <div>
                          <div class="row h5"><div class="col t2">Ashes on the Fire</div><div class="t4 col text-end">Attack on Titan</div></div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div class="row mb-4">
            <a class="btn btn-success col ms-3 me-1" href="https://open.spotify.com/playlist/2HbQZYH3hMnfCXfQFsCGtf?si=IVBISsSdROSPRaCkABNhPQ" target="_blank" rel="noopener noreferrer" role="button">Spotify Anime Songs Playlist</a>
            <a class="btn btn-success col me-3 ms-1" href="https://open.spotify.com/playlist/6Ausj8kCb9GQ43Bwmn8scN?si=sEHVbI2UTGSvg2RN35_NIQ" target="_blank" rel="noopener noreferrer" role="button">Spotify Anime OST Playlist</a>
          </div>
        </div>
      </div>
      <div class="row bg-2 text-white text-center t3">
        <div class="row justify-content-center my-1">
          <div class="col-2"><a role="button" href="https://www.reddit.com/user/mihir_okte" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.reddit.com/user/mihir_okte" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.snapchat.com/add/mihir_okte" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.snapchat.com/add/mihir_okte" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.instagram.com/mihir_okte/" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.instagram.com/mihir_okte/" bgColor="#7E1F86" fgColor="#ffffff" /></a></div>
          <div class="col-2"><a role="button" href="https://www.facebook.com/mihir.okte.3" target="_blank" rel="noopener noreferrer" class="text-white bg-2 text-center"><SocialIcon url="https://www.facebook.com/mihir.okte.3" bgColor="#7E1F86" fgColor="#ffffff"/></a></div>
        </div>
      </div>
    </div>
  );
  }
}
