import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

class QuarantineCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>     
                <div className="row align-items-end justify-content-between">
                <div className="col-md-6">
                  <h3><i>Learning React</i></h3>
                  <h1>Quarantine Cards</h1>
                  </div>
                </div>
                <hr></hr>
                <h3>Overview & Goals</h3>
                <p>This web appplication aims to help users find things to do while in quarantine from the COVID-19 pandemic. It consists of a bank of activity "cards" tagged by their expected duration and expected physical intensity level. Users can filter and sort through these cards to find ones that appeal to them, and then add the ones they plan on doing to their "My Day" aggregator which keeps track of all the cards the user has added and the total amount of time they sum to. Hopefully, this application can help users combat boredom and make it easier for them to find healthy and safe things to do with their time!
                </p>

                <div class="card">
                <figure class="screenshot" >
                    <img class="screenshot-img"src="images/screenshot.png" alt="screenshot of the application"/>
                    <figcaption>Screenshot of final web application.</figcaption>
                </figure>
                </div>

                <div>
                <h3>Usability Considerations</h3>
                <p>In designing the visual interface of this application, I wanted to make it as simple, easy-to-use, and visually appealing as possible. One challenge I faced was trying to make the card grid and the "My Day" aggregator section clearly seperate sections while still making them cohesive as side by side sections on the page. To achieve this, I made the aggregator starting height as the same as the first row of the grid to make it visually blend in more, but I mgave it a different background color and added more horizontal spacing between it and the grid. Once cards were added to aggregator, I removed the icon so they would take up less vertical space, and changed the background color to make them more distinguishable from the grid. The color I changed them to was the same color as the dropdown buttons for the gird for some more cohesiveness.
                </p>
                <p> More generally, I kept visual design principles such as clear text hierarchies and simple, consistent color palettes at the forefront of my design. I used color to make important elements like the buttons stand out by making them more vibrant. I made the cards as consistent as possible, such as making sure they were the same total height and forcing the icons to be the same height so that all the titles were in same line with each other. 
                </p>
                
                </div>

                <div>
                <h3>Final Application & Code</h3>
                <p> Check out the <a href="https://salty-beyond-44732.herokuapp.com/">final web application</a> and the project's <a href="https://github.com/kfriis33/quarantine-cards">source code on GitHub</a>!</p>
                
                </div>
            </div>
        )
    }
}

export default QuarantineCards;