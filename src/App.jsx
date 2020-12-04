import React from "react";

import './assets/fonts.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from "./Projects";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import AboutPage from "./AboutPage";
import ResumePage from "./ResumePage";


const pages = {
  'projects':{title:'projects', content:<Projects/>},
  'about':{title:'about', content:<AboutPage/>},
  'resume':{title:'resume', content:<ResumePage/>},

}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: pages['projects']
    }
  }

  changePage = (key) => {
    const newPage = pages[key]
    this.setState({currPage:newPage})
  }
  render() {
    return (
      <div>
        <div className='header'>
          <h1>Katie Friis</h1>
          <h4>Computer Science Student @Brown</h4>
            <Navbar>
              <Nav 
              className="m-auto nav"
              activeKey='projects'
              onSelect={(selectedKey) => this.changePage(selectedKey)}
              >
                <Nav.Link eventKey='projects'>Projects</Nav.Link>
                <Nav.Link eventKey='about'>About</Nav.Link>
                <Nav.Link eventKey='resume'>Resume</Nav.Link>
              </Nav>
            </Navbar>
        </div>
        <div>
          {this.state.currPage.content}
        </div>
        <footer id="footer">
          <hr/>
          Thanks for visiting! This site is built in React.js, check out the source code.
        </footer>
      </div>
    );
  }
}

