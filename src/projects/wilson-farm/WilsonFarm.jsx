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
              <div className="row align-items-end justify-content-between">
                <div className="col-md-6">
                  <h3><i>Website Redesign</i></h3>
                  <h1> Wilson Farm</h1>
                  
                </div>
                <div className="col-md-6 open-tab">
                <a  href="https://peaceful-caverns-98735.herokuapp.com/" target="_blank"><LaunchIcon/> Final redesign</a>
                </div>
              </div>

              <hr></hr>
              <h3> Overview </h3>
              <p>
                Wilson Farm is a New England based farm who grows and sells produce locally. Unlike their high-end produce, their website is in need of a tune up. I focused on redesigning their homepage since it is the most heavily trafficked page and carries the most weight in creating a first impression. I first identified current usability and accessibility issues, then prototyped a redesign, and finally coded my redesign as a responsive webpage.
              </p>
              <h4>Old design</h4>
              <p>Below is a screenshot of the old design of Wilson Farm's homepage that I redesigned. You can visit the live version of their <a href="http://www.wilsonfarm.com/v2.0/home.php">current website</a> (but it is possible that it has changed since I worked on this project).</p>
              <div className="content-card">
                <figure>
                  <img src={OldDesignImg} alt="Old design" />
                </figure>
              </div>
              <h3> Usability Issues </h3>
              <p>I began by studying the current website, noting issues with its learnability, efficiency, and memorability, and then evaluating its accessibility using <a href="https://wave.webaim.org/">WebAIM WAVE</a> and a screen reader.</p>
              <div className = "row no-gutters">
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Learnability</h5>
                  <ul>
                        <li>Slideshow contains  “ad” for their online delivery that has text: makes it look cluttered and like you’re missing out on important information when the slide changes
                        </li>
                        <li>The lack of a consistent layout and inconsistent text hierarchy makes it unclear in what order to traverse the page in
                        </li>
                        <li>Navbar at the top of the screen for social media links is distracting from the real navbar below it
                        </li>
                      </ul>
                  </div>
                </div>
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Efficiency</h5>
                  <ul>
                        <li>Too many navbar elements (8) whose names do not clearly indicate what information they link to (i.e. “specials” for what?) 
                        </li>
                        <li>Hard to navigate to key destinations (i.e. visiting the farm, learning more about the farm, and ordering online)
                        </li>
                        <li>Difficult to read text on top of textured background, particularly the green text due to low contrast
                        </li>
                        <li>Footer navigation is complex and un-intuitively organized, making it hard to find where you want to go
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className = "row no-gutters ">
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Memorability</h5>
                  <ul>
                        <li>Clutteredness makes it hard to remember where things are on the page</li>
                        <li>Multitude of colors and fonts makes it hard to makes it visually overwhelming and hard to remember what the element you are looking for looked like
                        </li>
                      </ul>
                  </div>
                </div>
                <div className = "col-md-6 p-2">
                <div className="bubble">
                  <h5>Accessibility</h5>
                  <ul>
                <li>No alt text for the images (27 examples)</li>
                <li>Missing first level heading (since “Wilson Farm” title  is an image)</li>
                <li>No page regions or ARIA landmarks</li>
                <li>Some non-heading text is coded as headings</li>
                <li>Screen reader is extremely confusing because the blocks of information have little  order or hierarchy </li>
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
              <h3> Prototypes </h3>
              <p>After identifying the key areas for improvement, I brainstormed redesigns for how to address these issues. Once I came up with one I liked, I created low-fi and then hi-fi prototypes for the redesign.</p>


              <h4>Wireframes</h4>
              <p>I created wireframe mockups of the homepage using Balsamiq and annotated the key design elements and the usability issues they address. Since Wilson Farm's website is currently not responsive, these wireframes also show how my redesign responds to for desktop, tablet, and mobile sized windows.</p>
              <div className="iframe-container">
              <iframe className="prototype-frame" src="https://xd.adobe.com/embed/c7a11350-2cf5-4d6d-91f9-741d35d52c79-92f2/?hints=off" scrolling="yes" ></iframe>
              </div>
              <div className="open-tab">
              <a href="https://xd.adobe.com/view/c7a11350-2cf5-4d6d-91f9-741d35d52c79-92f2/?hints=off" target="_blank"><LaunchIcon/> View in new tab</a>
              </div>
              

              <h4>High fidelity mock-ups</h4>
              <p>I then converted my wireframes into hi-fi mockups using Adobe XD. I annotated the key HTML and CSS elements that would be important when actually coding out the website.</p>

              <div className="iframe-container">
              <iframe className="prototype-frame" src="https://xd.adobe.com/embed/3a0d0adf-8f47-4829-afa7-22e1ca828d57-6f5e/?fullscreen" ></iframe>
              </div>
              <div className="open-tab">
              <a  href="https://xd.adobe.com/view/3a0d0adf-8f47-4829-afa7-22e1ca828d57-6f5e/?hints=off" target="_blank"><LaunchIcon/> View in new tab</a>
              </div>
              
              
              <h3> Developed Site </h3>
              <p>Finally, I coded my redesign of the homepage using HTML and CSS and used many CSS grids to make the page responsive for desktop, tablet, and mobile phone sizes. View <a href="https://peaceful-caverns-98735.herokuapp.com/" target="_blank"> the final website</a>!
              </p>
            </div>
          );
    }
}

export default WilsonFarm;