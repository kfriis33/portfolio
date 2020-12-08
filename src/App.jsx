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
      currPage: 'projects'
    }
  }

  changePage = (key) => {
    this.setState({currPage:key})
  }
  render() {
    return (
      <div>
        <div className='header'>
          <h1 className="name-title">Jeff Huang</h1>
          <p className="subheader">CS student @ Brown</p>
            <Navbar className="pt-2" variant="light">
              <Nav 
              className="m-auto nav"
              activeKey={this.state.currPage}
              onSelect={(selectedKey) => this.changePage(selectedKey)}
              >
                <Nav.Link className="mx-1" eventKey='projects'>Projects</Nav.Link>
                <Nav.Link className="mx-1" eventKey='about'>About</Nav.Link>
                <Nav.Link className="mx-1" eventKey='resume'>Resume</Nav.Link>
              </Nav>
            </Navbar>
          
        </div>
        
        <div className="main-body">
          {pages[this.state.currPage].content}
        </div>
        <footer id="footer">
          <hr/>
          Thanks for visiting! This site is built in React.js, check out the <a href="https://github.com/kfriis33/portfolio">source code</a>.
        </footer>
      </div>
    );
  }
}

