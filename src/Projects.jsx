import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import QuarantineCards from './projects/quarantine-cards/QuarantineCards'
import WilsonFarm from './projects/wilson-farm/WilsonFarm'

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import IterativeDesign from './projects/iterative-design/IterativeDesign'

import WilsonCardImg from './assets/new/wilson-card.svg'
import QuarantineCardImg from './assets/new/quarantine-card.svg'
import TechnoCardImg from './assets/new/techno-card.svg'
import IterativeCardImg from './assets/new/iterative-card.svg'

import TechnoOptimism from './projects/techno-optimism/TechnoOptimism'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Badge from 'react-bootstrap/Badge'


class Projects extends Component {
    constructor(props) {
        super(props);

        this.projects = {
            "wilson-farm": {key:"wilson-farm", title:"Wilson Farm Redesign", description:"Web design & development", page:<WilsonFarm/>, img:WilsonCardImg, links:[{name:"Final redesign", link:"https://peaceful-caverns-98735.herokuapp.com/"}, {name:"Source code", link:"https://github.com/kfriis33/wilson_farm_redesign", icon:<GitHubIcon fontSize="small"/>}], caption:"Redesigning a local farm's homepage", tags:["Web Design", "HTML/CSS"]},

            "quarantine-cards": {key:"quarantine-cards", title:"Quarantine Cards", description:"React.js Development", page:<QuarantineCards/>, img:QuarantineCardImg, links:[{name:"Final site", link:"https://salty-beyond-44732.herokuapp.com/"}, {name:"Source code", link:"https://github.com/kfriis33/quarantine-cards", icon:<GitHubIcon fontSize="small"/>}], caption:"Learning React.js with a simple web app", tags:["React.js"]},

            "techno-optimism": {key:"techno-optimism", title:"Visualizing Techno-Optimism", description:"Data Visualization", page:<TechnoOptimism/>, img:TechnoCardImg, links:[{name:"Current site", link:"https://techno-optimism.herokuapp.com/"}, {name:"Source code", link:"https://github.com/kfriis33/tech-data-viz", icon:<GitHubIcon fontSize="small"/>}], caption:"Exploring and visualizing trends of techno-optimism", tags:["Data Viz", "D3.js", "React.js"]},

            "iterative-design": {key:"iterative-design", title:"Carbon Chain Redesign", description:["Iterative design"], page:<IterativeDesign/>, img:IterativeCardImg, links:[{name:"Final prototype", link:"https://www.figma.com/proto/AH5UgLKXzFH2fxYRsndTS2/Carbon-Chain?kind=&node-id=20%3A5&scaling=scale-down-width"}], caption:"Designing a start up's web app and iterating based on feedback", tags:["Iterative Design", "Figma"]},
        }
        // "climate-tweets": {key:"climate-tweets", title:"Posting for Eco-Behavior", description:"Data Science Hypothesis Testing", page:<IterativeDesign/>, img:IterativeCardImg, links:[{name:"Final prototype", link:"https://www.figma.com/proto/AH5UgLKXzFH2fxYRsndTS2/Carbon-Chain?kind=&node-id=20%3A5&scaling=scale-down-width"}], caption: "Does social media buzz about climate change actually lead to more climate conscious behavior?"},

        this.state = {
            current:<Grid projects={this.projects} createItem={this.createItem}/>
        }
    }

    // componentDidUpdate() {
    //     this.updatePage("grid")
    // }

    makeBadge = item => {
        return (
            <Badge className="card-badge">{item}</Badge>
        )
    }

    // Creates a card for each project
    createItem = item => {  
        return (
            <div>
                <Card 
                    className="fullCard mb-4"
                    onClick={() => this.updatePage(item.key)}>
 
                    <div>
                        {/* <div className="overlay ">
                            <span className="align-middle">{item.caption}</span>
                        </div> */}
                        <Card.Img variant="top" src={item.img} alt="project image"/>
                    </div>

                    <Card.Body>
                    <Card.Title className="card-title">{item.title} </Card.Title>
                    <Card.Text>
                        <p className="subheader pb-1">{item.caption}</p>
                        {/* {item.description} */}
                        {item.tags.map(this.makeBadge)}

                    </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        {'Footer content'}
                    </Card.Footer> */}
                </Card>
            </div>
            );
    };

    updatePage = key => {
        console.log("this update", key)
        if (key === "grid") {
            this.setState({current:<Grid projects={this.projects} createItem={this.createItem}/>})
        } else {
            const newPage = <ProjectPage pageInfo={this.projects[key]} changePage={this.updatePage}/>;
            this.setState({current:newPage})
        }
    }

    render() {
        return (
            <div>
                {this.state.current}
            </div>
        )
    }
}

export default Projects;



class Grid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const projects = this.props.projects;
        const projectsList = Object.keys(projects).map(function(key){
            return projects[key]});

        return (<CardDeck>
            {projectsList.map(this.props.createItem)}
        </CardDeck>)
    }
}

class ProjectPage extends Component {
    constructor(props) {
        super(props);
    }

    makeLink = (item) => {
        let icon = <LaunchIcon fontSize="small"/>
        if (item.icon) {
            icon=item.icon
        }
        return (
            <div class="pt-1">
                <a  href={item.link} target="_blank">{icon}  {item.name}</a>
            </div>
           
        )
    }

    render() {
        const page = this.props.pageInfo;
        // const links = <p>hello</p>
        // page.links.map((name, link) => {<a href={link}>name</a>})
        return (
            <div className="projectPage">
                <IconButton  className="close-button" aria-label="delete" onClick={() => {this.props.changePage("grid")}}>
                    <CancelIcon fontSize='large'/>
                </IconButton>
                <div className="row align-items-end justify-content-between">
                <div className="col-md-9">
                  <h3 className="mt-0"><i>{page.description}</i></h3>
                  <h1>{page.title}</h1>
                  </div>
                
                <div className="col-md-3 top-links">
                {page.links.map(this.makeLink)}

                {/* <a  href="https://salty-beyond-44732.herokuapp.com/" target="_blank"><LaunchIcon/> Final site</a> */}
                </div>
              </div>
              <hr></hr>
                {this.props.pageInfo.page}
                <IconButton className="return-button" onClick={() => {this.props.changePage("grid")}}>
                <KeyboardReturnIcon fontSize="small"/>
                  <span className="spacer"/> back to all projects
                </IconButton>

            </div>
        );

    }
}
