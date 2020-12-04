import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

class ProjectGrid extends Component {
    constructor(props) {
        super(props);
    }

    // Creates a card for each activity
    createItem = item => {  
        return (
            <div>
                <Card 
                    className="fullCard mb-4"
                >
                    <Card.Img className="card-image" variant="top" src={images[item.icon_name]}/>

                    <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text className="card-description">
                        {item.description}

                    </Card.Text>
                    <Card.Text>
                    <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                        <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
                        </Card.Text>
                    <Button id="add-button" onClick={() => this.props.addCard(item)}>Add</Button>
                    </Card.Body>
                    {/* <Card.Footer>
                        {'Footer content'}
                    </Card.Footer> */}
                </Card>
            </div>
            );
    };

    render() {
        return (
            <div>
                <CardDeck>
                    {this.props.list.map(this.createItem)}
                </CardDeck>
            </div>
        )
    }
}

export default DisplayList;