import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import TechnoGif from './techno.gif'

class TechnoOptimism extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <i>Note: this project is still being worked on and is not yet in its final form :)</i>
                <h2>Overview</h2>
                <p>In this project, I worked with one teammate while taking a seminar called <a href="http://cs.brown.edu/~seny/2952v/">"Algorithms for the People"</a>, which examined the societal impacts of technology. We were interested in exploring and visualizing the trend of techno-optimism, the notion that technology can continually be improved and can continually improve people’s lives and make the world a better place. From class readings and discussions throughout the semester, this notion was repeatedly debunked as we saw example after example of technologies that did more harm than good despite their “for good” framing to the public. We were interested in exploring these trends more formally, but initially we were not sure exactly how. 
                </p>
                <h3>Guiding Questions</h3>
                <ul>
                    <li>How can trends of techno-optimism be quantified and communicated to the public?</li>
                    <li>How do the ways companies describe themselves differ from their true impact?</li>
                </ul>

                <h3>Project Summary</h3>
                <p>These questions led us to focusing on the written language that pushes forward overly positive views of technology. We brainstormed various text-based data sources that might have this agenda such as company mission statements and websites, and then brainstormed text-based data sources that might provide contrast such as news articles, court cases, and academia. We created datasets for ourselves using web scraping, then used natural language processing to analyze them to find the most commonly used words, the most common verbs and adjectives, and the sentiment rating of the text as a whole. Finally, we made data visualizations of these results and displayed them on a public website. By quantifying the trends of language used by different technology stakeholders and creating visualizations of them, we sought to reveal the fluff that’s used to make technology seem like an entirely positive, world-changing good and display the dissonance between this language and technology’s true impact.</p>
                <div className="content-card">
                <img src={TechnoGif} alt="Screenshot recording of website" width="500px" />
                </div>

                <h2>Final Application & Code</h2>
                <p> Check out the <a href="">final web application</a> and the project's <a href="">source code on GitHub</a>!</p>

                <h2>Learnings & Takeaways</h2>
                <p>A major challenge of this project was actually determining what the project should be. Since we started completely from scratch, picking the direction we wanted to go and the goals we wanted to achieve was not easy. From there, deciding on more specific details such as data sources and types of visualizations felt overwhelming, especially given how exploratory the project as a whole was. In the end, I think an important lesson learned was just getting started. Although some planning is definiltey helpful and important, exploring without a completely concrete direction and trying things out experimentally is definitley better than staying stuck in the brainstorming phase.</p>
          
            </div>
        )
    }
}

export default TechnoOptimism;