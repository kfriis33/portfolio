import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import QuarantineCards from './projects/QuarantineCards'
import WilsonFarm from './projects/wilson-farm/WilsonFarm'

import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import IterativeDesign from './projects/iterative-design/IterativeDesign'

import WilsonCardImg from './assets/wilson-card.svg'
import QuarantineCardImg from './assets/quarantine-card.png'
import TechnoCardImg from './assets/techno-card.png'
import IterativeCardImg from './assets/iterative-card.png'
import TechnoOptimism from './projects/TechnoOptimism'



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

    render() {
        return (
            <div className="projectPage">
                <IconButton  className="close-button" aria-label="delete" onClick={() => {this.props.changePage("grid")}}>
                    <CancelIcon fontSize='large'/>
                </IconButton>
                {this.props.page}
            </div>
        );

    }
}

const colors = {"wilson-farm":'#972b25', "quarantine-cards":'purple', "techno-optmism":'blue', "iterative-design":'green',}
class Projects extends Component {
    constructor(props) {
        super(props);

        this.projects = {
            "wilson-farm": {key:"wilson-farm", title:"Wilson Farm Redesign", description:"Web design & development", page:<ProjectPage changePage={this.updatePage} page={<WilsonFarm/>}/>, img:WilsonCardImg},
            "quarantine-cards": {key:"quarantine-cards", title:"Quarantine Cards", description:"React.js Development", page:<ProjectPage changePage={this.updatePage} page={<QuarantineCards/>}/>, img:QuarantineCardImg},
            "techno-optimism": {key:"techno-optimism", title:"Visualizing Techno-Optimism", description:"Data Visualization", page:<ProjectPage changePage={this.updatePage} page={<TechnoOptimism/>}/>, img:TechnoCardImg},
            "iterative-design": {key:"iterative-design", title:"Carbon Chain Redesign", description:"Iterative design", page:<ProjectPage changePage={this.updatePage} page={<IterativeDesign/>}/>, img:IterativeCardImg},
        }

        this.state = {
            current:<Grid projects={this.projects} createItem={this.createItem}/>
        }
    }

    // Creates a card for each project
    createItem = item => {  
        return (
            <div>
                <Card 
                    className="fullCard mb-4"
                    onClick={() => this.updatePage(item.key)}
                >
                    {/* <div className="card-div" style={{backgroundColor:colors[item.key]}}
>
                    </div> */}
                    <Card.Img variant="top" src={item.img}/>

                    <Card.Body>
                    <Card.Title className="card-title">{item.title} </Card.Title>
                    <Card.Text className="card-description">
                        {item.description}

                    </Card.Text>
                    {/* <Card.Text> */}
                    {/* <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                        <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
                        </Card.Text>
                    <Button id="add-button" onClick={() => this.props.addCard(item)}>Add</Button> */}
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
            const newPage = this.projects[key].page;
            this.setState({current:newPage})
        }
    }


    render() {
        // this.updatePage(this.props.landing);
        return (
            <div>
                {this.state.current}
            </div>
        )
    }
}

export default Projects;