import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts.css';
import './App.css';

import Projects from "./Projects";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const pages = {
  'projects':{title:'projects', content:<Projects/>},
  'about':{title:'about', content:<AboutPage/>},
  'resume':{title:'resume', content:<ResumePage/>},

}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: 'projects'
    }
  }

  changePage = (key) => {
    this.setState({currPage:key})
    console.log("state", this.state)
    console.log("props", this.props)
    console.log(this.props.history)
  }
  render() {
    return (
      <div>
        
        {/* <BrowserRouter> */}
        <div>
            <div className='header'>
              <h1 className="name-title">Katie Friis</h1>
              <p className="subheader">ugrad @ Brown, incoming SWE @ Google</p>
                <Navbar className="pt-2" variant="light">
                  <Nav 
                  className="m-auto nav"
                  activeKey={this.state.currPage}
                  onSelect={(selectedKey) => this.changePage(selectedKey)}
                  >
                    <Nav.Link className="mx-1" eventKey='projects' to="/">Projects</Nav.Link>
                    <Nav.Link className="mx-1" eventKey='about' to='/about'>About</Nav.Link>
                    <Nav.Link className="mx-1" eventKey='resume' to="/resume">Resume</Nav.Link>
                  </Nav>
                </Navbar>
              
            </div>
            {/* <Switch>
             <Route path="/" component={Projects} exact/>
             <Route path="/about" component={AboutPage}/>
             <Route path="/resume" component={ResumePage}/>
            <Route component={Error}/>
           </Switch> */}
        </div> 
      {/* </BrowserRouter> */}




        <div className="main-body">
          {pages[this.state.currPage].content}
        </div>


        <footer id="footer">
          <hr/>
          <a  href="https://www.linkedin.com/in/katie-friis-107032156/" target="_blank"><LinkedInIcon/></a>
           <span className="spacer"/>
          <a  href="https://github.com/kfriis33" target="_blank"><GitHubIcon/></a>

           <span className="spacer"/>
           <a href="mailto: katie_friis@alumni.brown.edu"><EmailIcon/></a>
          
          <br/>
          <p className="mt-1"><i>Thanks for visiting! I built this site using React.js, check out the <a href="https://github.com/kfriis33/portfolio">source code</a>.
          </i></p>
        </footer>
      </div>
    );
  }
}

