import React, {Component} from 'react'

import AppScreenshot from "./screenshot.png"


class QuarantineCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>     
                <h2>Overview</h2>
                <p>While quarantining from COVID-19, have you ever found yourself at a loss for what to do? If so, this web app is for you! I designed and built this web app to learn React.js and produce a tool that would help combat boredom and stress during these difficult times. The final site consists of a bank of "activity cards", which users can filter and sort through to find ones that appeal to them, and then add them to their "My Day" aggregator. Hopefully, this application can help users find healthy and safe things to do with their time!
                </p>

                <div className="mx-2">
                <figure>
                    <img src={AppScreenshot} alt="screenshot of the application"/>
                    <figcaption>Screenshot of final web application.</figcaption>
                </figure>
                </div>

                <div>
                <h2>Design Considerations</h2>
                <p>In designing the visual interface of this application, I wanted to make it as simple, easy-to-use, and visually appealing as possible. One challenge I faced was trying to make the card grid and the "My Day" aggregator section clearly seperate sections while still making them cohesive as side by side sections on the page. To achieve this, I made the aggregator starting height as the same as the first row of the grid to make it visually blend in more, but I mgave it a different background color and added more horizontal spacing between it and the grid. Once cards were added to aggregator, I removed the icon so they would take up less vertical space, and changed the background color to make them more distinguishable from the grid. The color I changed them to was the same color as the dropdown buttons for the gird for some more cohesiveness.
                </p>
                <p> More generally, I kept visual design principles such as clear text hierarchies and simple, consistent color palettes at the forefront of my design. I used color to make important elements like the buttons stand out by making them more vibrant. I made the cards as consistent as possible, such as making sure they were the same total height and forcing the icons to be the same height so that all the titles were in same line with each other. 
                </p>
                
                </div>

                <div>
                <h2>Final Application & Code</h2>
                <p> Check out the <a href="https://salty-beyond-44732.herokuapp.com/">final web application</a> and the project's <a href="https://github.com/kfriis33/quarantine-cards">source code on GitHub</a>!</p>
                
                <h2>Learnings & Takeaways</h2>
                <p>I learned a lot of technical skills from working on this project. As my first real deep dive into React.js (and also Javascript actually), I was introduced to all things React: components, props, state, just to name a few. More generally, I learned the importance of organizing the various components and call back functions in a deliberate way (I learned the hard way that things can get messy very fast). Finally, as someone who would actually use this application, I had a lot of fun thinking about the user experience and stepping into the shoes of the user and designing for them!</p>
                </div>
            </div>
        )
    }
}

export default QuarantineCards;