import React, {Component} from 'react'


import './wilson.css';

import OldDesignImg from "./assets/old-design.png";
import StyleGuideImg from "./assets/style-guide.png";
import LaunchIcon from '@material-ui/icons/Launch';

class WilsonFarm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <h2> Overview </h2>
              <p>
                Wilson Farm is a New England based farm that grows and sells produce locally. Unlike their high-end produce, their website is in need of a tune up. I focused on redesigning their homepage since it is the most heavily trafficked page and carries the most weight in creating a first impression. I first identified current usability and accessibility issues, then prototyped a redesign, and finally coded my redesign as a responsive webpage.
              </p>
              <h3>Old design</h3>
              <p>Below is a screenshot of the old design of Wilson Farm's homepage. You can visit the live version of their <a href="http://www.wilsonfarm.com/v2.0/home.php">current website</a> (but it may have changed since I worked on this project).</p>
              <div className="content-card">
                <figure>
                  <img src={OldDesignImg} alt="Old design" />
                </figure>
              </div>
              <h2>Design Process</h2>
              <h3>Identifying Usability Issues </h3>
              <p>I began by studying the current website, noting issues with its learnability, efficiency, and memorability, and then evaluating its accessibility using <a href="https://wave.webaim.org/">WebAIM WAVE</a> and a screen reader.</p>
              <div className = "row no-gutters">
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Learnability</h5>
                  <ul>
                        <li>Slideshow contains text and scrolls through quickly; feels cluttered and overwhelming
                        </li>
                        <li><strong>Lack of a consistent layout or text hierarchy</strong> makes it unclear in what order to traverse the page in
                        </li>
                        <li>"Social media navbar" is distracting from the real navbar below it
                        </li>
                      </ul>
                  </div>
                </div>
                <div className = "col-md-6 p-2">
                <div className="bubble">
                <h5>Memorability</h5>
                  <ul>
                        <li>Overall clutteredness makes it hard to remember where things are on the page</li>
                        <li><strong>Multitude of colors and fonts</strong> is visually overwhelming and makes it hard to remember what an element looked like
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className = "row no-gutters ">
                <div className = "col-md-6 p-2">
                <div className="bubble">
                <h5>Efficiency</h5>
                  <ul>
                        <li>Many navbar elements (8) with ambiguous names (i.e. “specials” for what?) 
                        </li>
                        <li><strong>Hard to navigate to key destinations</strong> (i.e. visiting, learning more, and ordering online)
                        </li>

                        <li>Footer navigation is complex and un-intuitively organized; hard to find where you want to go
                        </li>
                      </ul>
                  
                  </div>
                </div>
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Accessibility</h5>
                  <ul>
                
                <li>Screen reader is extremely confusing because the <strong>blocks of information have little order or hierarchy</strong> </li>
                <li><strong>Hard to read text on textured background</strong> (esp. green text)
                </li>
                <li>Missing a first level heading ("Wilson Farm” title is an image)</li>
                <li>No alt text for images, page regions, or ARIA landmarks</li>
              </ul>
                  </div>
                </div>
              </div>

              <h3>Visual Style Guide</h3>
              <p>I created a visual style guide using Adobe XD to determine and document the key visual elements in my redesign. The guide is shown below:
              </p>
              <div className="mx-1">
                <img src={StyleGuideImg} alt="visual style guide" />
              </div>

              <h3>Wireframe Prototypes</h3>
              <p>I created wireframe mockups of the homepage using Balsamiq and annotated the key design elements and the usability issues they address. Since Wilson Farm's website is currently not responsive, these wireframes also show how my redesign responds to for desktop, tablet, and mobile sized windows (toggle with arrows at bottom of box).</p>
              <div className="iframe-container">
              <iframe className="prototype-frame" src="https://xd.adobe.com/embed/c7a11350-2cf5-4d6d-91f9-741d35d52c79-92f2/?hints=off" scrolling="yes" ></iframe>
              </div>
              <div className="open-tab">
              <a href="https://xd.adobe.com/view/c7a11350-2cf5-4d6d-91f9-741d35d52c79-92f2/?hints=off" target="_blank"><LaunchIcon/> View in new tab</a>
              </div>
              

              <h3>High Fidelity Prototypes</h3>
              <p>I then converted my wireframes into hi-fi mockups using Adobe XD. I annotated the key HTML and CSS elements that would be important when actually coding out the website.</p>

              <div className="iframe-container">
              <iframe className="prototype-frame" src="https://xd.adobe.com/embed/3a0d0adf-8f47-4829-afa7-22e1ca828d57-6f5e/?fullscreen" ></iframe>
              </div>
              <div className="open-tab">
              <a  href="https://xd.adobe.com/view/3a0d0adf-8f47-4829-afa7-22e1ca828d57-6f5e/?hints=off" target="_blank"><LaunchIcon/> View in new tab</a>
              </div>
              
              
              <h2> Developed Site </h2>
              <p>Finally, I coded my redesign of the homepage using HTML and CSS and used many CSS grids to make the page responsive for desktop, tablet, and mobile phone sizes. View <a href="https://peaceful-caverns-98735.herokuapp.com/" target="_blank"> the final website</a> and see the <a href="https://github.com/kfriis33/wilson_farm_redesign">source code</a>!
              </p>

              <h2>Learnings & Takeaways</h2>
              <p>From this project, I learned a lot more about web development with HTML and CSS and making pages responsive. I experimented with flex boxes and CSS grids, but for relatively small grids found that I liked CSS grids better because you can control exactly how the page responds at different sizes. I also found that designing with simplicity at the forefront goes a long way in improving the usability of the website, as well as stepping into the users' shoes to imagine the important destinations or information they would be seeking to find on the website. </p>
            </div>
          );
    }
}

export default WilsonFarm;