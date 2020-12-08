import React, {Component} from 'react'

import './iterative.css';
import Carousel from 'react-bootstrap/Carousel'

import Sketch1Dashboard from "./assets/sketches/dashboard-1.svg"
import Sketch1Chain from "./assets/sketches/chain-1.svg"
import Sketch1Add from "./assets/sketches/add-1.svg"
import Sketch1Account from "./assets/sketches/account-2.svg" 
import Sketch2Dashboard from "./assets/sketches/dashboard-4.svg"
import Sketch2Add from "./assets/sketches/add-3.svg";
import Sketch3Dashboard from "./assets/sketches/dashboard-2.svg"
import Sketch3Chain from "./assets/sketches/chain-2.svg"
import Sketch3Account from "./assets/sketches/account-1.svg"
import Sketch4Dashboard from "./assets/sketches/dashboard-3.svg"
import Sketch4Chain from "./assets/sketches/chain-3.svg"
import Sketch4Add from "./assets/sketches/add-2.svg"

import User1Gif from "./assets/gifs/User Test 1.gif"
import User2Gif from "./assets/gifs/User Test 2.gif"
import User3Gif from "./assets/gifs/User Test 3.gif"


class IterativeDesign extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
              <div>
                <h2>Overview</h2>
                <p>In this project, I worked with two teammates to design an application for the Y-Combinator start-up <a href="https://carbonchain.io/">Carbon Chain</a>. Throughout our design process, we never looked at Carbon Chain's website or product and based our design off of the loose premise of their start up: software to help companies––mostly gas and oil companies, 
                  regulators, and carbon traders––estimate and track the carbon emissions of their supply chains.

                </p>
                <p>
                  We decided to design the main product’s interface for a 
                  user to view their company's emissions and supply chains. We imagined that our users would each have custom needs 
                  in terms of what data was most important to them. Companies or regulators are dealing with vast 
                  amounts of data and ever changing regulations, so we wanted our interface to be customizable, 
                  simple, and insightful.
                </p>
              </div>
              <h2>Design Process</h2>
              <div>
                <h3>Sketches</h3>
                <p>We began by brainstorming multiple ideas for the design of the website. To get the greatest diversity of ideas, we first each brainstormed individually and made a sketch for how we thought the design could look. We then looked at all three sketches together and mixed and matched different ideas to come up with a fourth sketch.</p>


                <div className="row mx-2">
                  <div className="col-md-6">
                    <h5>Sketch 1</h5>
                    <Carousel interval={null} className="sketch-container">
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Dashboard</p>
                        </Carousel.Caption>
                        <img src={Sketch1Dashboard} className="sketch-1" /> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Supply chains</p>
                        </Carousel.Caption>
                        <img src={Sketch1Chain} className="sketch-1" /> 
                      </Carousel.Item>
                        <Carousel.Item>
                        <Carousel.Caption>
                          <p>Add new chain</p>
                        </Carousel.Caption>
                        <img src={Sketch1Add} className="sketch-1" /> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Account</p>
                        </Carousel.Caption>
                        <img src={Sketch1Account} className="sketch-1" />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-md-6">
                    <h5>Sketch 2</h5>
                    <Carousel interval={null} className="sketch-container">
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Dashboard</p>
                        </Carousel.Caption>
                        <img src={Sketch2Dashboard}/> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Supply chains</p>
                        </Carousel.Caption>
                        <img src={Sketch2Add}/> 
                      </Carousel.Item>
                  
                    </Carousel>
                  </div>
                </div>
                <div className="row mt-3 mx-2">
                  <div className="col-md-6">
                    <h5>Sketch 3</h5>
                    <Carousel interval={null} className="sketch-container">
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Dashboard</p>
                        </Carousel.Caption>
                        <img src={Sketch3Dashboard}/> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Supply chains</p>
                        </Carousel.Caption>
                        <img src={Sketch3Chain}/> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Account</p>
                        </Carousel.Caption>
                        <img src={Sketch3Account} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="col-md-6">
                    <h5>Sketch 4</h5>
                    <Carousel interval={null} className="sketch-container">
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Dashboard</p>
                        </Carousel.Caption>
                        <img src={Sketch4Dashboard}/> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Supply chains</p>
                        </Carousel.Caption>
                        <img src={Sketch4Chain}/> 
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                          <p>Add new chain</p>
                        </Carousel.Caption>
                        <img src={Sketch4Add}/> 
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
              </div>
              <div>
                <h3>Wireframes</h3>
                <p>Next we created a wireframe for our design based off of our four sketches. The wireframe was largely based off of Sketch #4, but as we built it out more we incorporated aspects of the other three sketches as well.</p>
                <div className="iframe-container">
                  <iframe className="prototype-frame" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FsnmtD1Uac7SLiRDbREhEB7%2FWireframes%3Fnode-id%3D0%253A1" allowFullScreen />
                </div>
              </div>
              <div>
                <h3>Hi-fi Mockups</h3>
                <p>Once we decided on wireframes we liked, we converted the design into a high fidelity prototype using Figma. In converting over our wireframes, we focused on using color to highlight key information while maintaining a pleasant and cohesive color scheme that would be pleasant to look at. We also added in more details to each page, and added interactive hovers and elements to make the prototype more dynamic. </p>
                <h4>Crit Feedback</h4>
                <p>After our first iteration of our high fidelity prototype, we participated in a critique with around 10 other students and a professional UI/UX designer. The pieces of feedback we received are detailed below:</p>
                <br />
                <div className="row no-gutters">
                  <div className="col-md-6 p-2">
                    <div className="bubble">
                      <h5>General</h5>
                      <ul>
                        <li>Make the drop down menu on the supply chains tab appear on hover (rather than click)</li>
                        <li>Allow users to log out from anywhere on the site (rather than having to go into the account page first)</li>
                        <li>Logo is simple and works will with the start up</li>
                        <li>Color family is pleasant and highlights the important info</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <div className="bubble">
                      <h5>Dashboard Page</h5>
                      <ul>
                        <li>“Download report” at bottom of dashboard is good because it encourages users to scroll through the whole dashboard first</li>
                        <li>Overall design and aesthetic is good but page is long: condense more information above the page fold</li>
                        <li>Consider making the dashboard more customizable to cater to different types of users</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-6 p-2">
                    <div className="bubble">
                      <h5>Supply Chain Pages</h5>
                      <ul>
                        <li>The “add new” option disappearing from the supply chain drop down menu when you are on the add new supply chain page feels inconsistent</li>
                        <li>It is hard to distinguish between steps when adding a new supply chain (for example, two extraction steps look identical)</li>
                        <li>Interface for adding a new supply chain is unique and simple but needs more instructional copy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <div className="bubble">
                      <h5>Account Page</h5>
                      <ul>
                        <li>Edit button on account page is not clear what “edit” is referring too</li>
                        <li>Generally, make the flow of the page more linear</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                  
      
                <br />
                <p>Based on this feedback, we iterated on our design to address each of the concerns and suggestions while maintaining the aspects of our design that received positive feedback. A few highlights of the design changes we made are:</p>
                <ul>
                  <li>Showing a high level overview of all the key pieces of information on the dashboard above the fold so that users can immediately see the most important metrics</li>
                  <li>Combining the “Adjust Timescale” and “Compare” buttons under the monthly graph on the dashboard to one “Customize Chart” button for better simplicity and clarity</li>
                  <li>Adding location to each step in the supply chain pages so that users can better distinguish between different steps while still maintaining a simple interface</li>
                  <li>Creating a drop down hover menu from the “Account” tab to allow for users to log out from anywhere in the site</li>
                </ul>
                <h4>Final Prototype</h4>
                <p>Below is our final prototype, after making the changes described above. We recomend viewing it in full screen mode (click arrows in upper right corner) or in Figma (click the bottom bar with the Figma logo) to ensure that all the interaction and hover elements work properly.</p>
                <div className="iframe-container">
                  <iframe className="prototype-frame" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAH5UgLKXzFH2fxYRsndTS2%2FCarbon-Chain%3Fnode-id%3D20%253A5%26scaling%3Dscale-down-width" allowFullScreen />    </div>
              </div>
              <div>
                <h2>User Testing</h2>
                <p>Next, we gathered more feedback on our interface through user testing. We submitted our prototype, 
                  a task, and follow-up questions and got responses from 3 users.</p>
                <h3>Taks and Questions for Users</h3>
                <div className="reduced-line-height">
                <ul>
                  <li>Main Task:</li>
                  <ul>
                    <li>Imagine you work at an oil company and are a new user of this product. Edit one of your existing supply chains.</li>
                    <li>Users were also given context on the startup and informed that this was a prototype not a website.</li>
                  </ul>
                  <li>Subtasks:</li>
                  <ul>
                    <li>Log in </li>
                    <li>Describe what you can do on this website (do not leave the dashboard)</li>
                    <li>Where would you go to edit a supply chain? Explain what you would expect to see there</li>
                    <li>Modify a specific step in the supply chain</li>
                  </ul>
                  <li>Post-test Questions:</li>
                  <ul>
                    <li>How easy or hard was it to complete the task? (0=Really easy, 6=Really hard) Why?</li>
                    <li>If you had a magic wand, how would you improve this site?</li>
                    <li>What did you like about the site?</li>
                    <li>Would you add anything to the site? Were there any features you wished to see?</li>
                  </ul>
                </ul>
                </div>
                <h3>Results</h3>
                <p>Below are the three users' answers to the post-test questions and gifs of how they interacted with the prototype.
                </p>
                <h4>User 1</h4>
                <div className="row">
                  
                  <div className="col-md-5 bubble ">
                  <ul>
                      <li>Rated hardness at a 3 (out of 6) because confusing to edit each step of the supply chain.</li>
                      <li>Suggested adding symbols to visually explain each step of the supply chain and, clarifying the goal of the website, and reducing fontsize of the total CO2 emissions/year. </li>
                      <li>Liked that it gives a step-wise detailed display of each supply chain. </li>
                      <li>Maybe would add more visuals to give the user a better sense of what the site is about.</li>
                    </ul>
                    
                  </div>
                  <div className="col-md-7 ">
                  <img src={User1Gif} alt="User 1 screen recording" width="500px" />

                    
                  </div>
                </div>
                <h4>User 2</h4>
                <div className="row">  
                  <div className="col-md-5 bubble">
                    <ul>
                      <li>Rated hardness at a 3 (out of 6).</li>
                      <li>Suggested adding icons to illustrate the menus and options when you hover your mouse over it.</li>
                      <li>Liked that its pretty simple not many things to look at.</li>
                      <li>Maybe would add a comparison between your emissions and the ones of the same industry in different countries.</li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <img src={User2Gif} alt="User 2 screen recording" width="500px" />
                  </div>
                </div>
                <h4>User 3</h4>
                <div className="row">
                  <div className="col-md-5 bubble">
                    <ul>
                      <li>Rated hardness at a 0 - very intuitive and the navigation was simple and logical.</li>
                      <li>Suggested making the visuals more appealing and providing more functionality when editing the supply chain.</li>
                      <li>Liked that it was imple, easy to navigate, and a clean, professional design.</li>
                      <li>Would improve the visuals to make it a more modern and visually attractive page.</li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <img src={User3Gif} alt="User 3 screen recording" width="500px" />
                  </div>
                </div>
                <h3>Analysis and Future Changes</h3>
                <ul>
                  <li>Two out three users were able to edit a supply chain (the main task) quickly and efficiently. </li>
                  <li>In terms of the sub-tasks, no users struggled with logging in. Most users identified the main tasks you can perform on the site in terms of what information you can view. When users were asked where they would go to edit a supply chain, there was something outside of our expectations. Two users indicated that they thought clicking on the drop down menu on “All Chains” on the dashboard would take them to the supply chain. The only other mistake a user made was a misunderstanding that it was a prototype and not a website. Overall the users did well on the subtasks.</li>
                  <ul>
                    <li>The gifs above demonstrate the ways users tried to navigate to the supply chain page</li>
                  </ul>
                  <li>One potential interface change could be changing the language on the “You are viewing section.” This was intended to allow users to quickly customize their dashboard view, however, it seemed that users interpreted it more as a navigation. One option could be change the title to “Change View,” add some more instructional copy 
                    (at least for first time users) or incorporate it into the customize dashboard button at the top. Based on the written feedback, we also could include more icons throughout the website and add back in our compare feature.</li>
                </ul>
              </div>
              <h2>Learnings & Takeaways</h2>
              <p>I learned a lot from the feedback we recieved throughout this project. First, hearing verbal feedback during our crit was valuable in seeing what others thought from a more high-level pass of our website. A lot of what we heard back was about the visual style and overall aesthetic. From user testing, being able to watch how someone used the prototype and tried to navigate through it was extremely interesting, especially since I had never done any sort of formal user testing with strangers before. I found this feedback to be extremely authentic and insgihtful into the usability strenghths and weakenesses of the prototype, and I definitley plan to use this technique again in the future to test my designs!</p>
            </div>
          );
    }
}

export default IterativeDesign;

