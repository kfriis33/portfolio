import React, {Component} from 'react'
import ProfileImg from './assets/me.jpeg'
class AboutPage extends Component {

    render() {
        return (
            <div className="row justify-content-between">
                <div className="col-sm-6">
                    <h3>Hi, I'm Katie!</h3>
        
<p>I am passionate about tackling the environmental issues of our century and am always interested in learning more about various technological and non-technological ways of mitigating and adapting to climate change. Last summer, I got to experience the technological side as an intern on <a href="https://insights.sustainability.google/">Environmental Insights Explorer</a>, a software that helps cities account for and reduce their greenhouse gas emissions by providing  estimates of their transport and building emissions as well as their solar energy potential.</p>

<p>At Brown, I’ve enjoyed being involved with Design for America, <a href="https://www.ivyfilmfestival.org/">Ivy Film Festival</a>, TAing in the CS department, and mentoring female underclassmen in CS. In my free time, I love most things outdoors– everything from rock climbing to reading a book at a park.</p>

<p>Please reach out at <a href="mailto: katie_friis@alumni.brown.edu">katie_friis@alumni.brown.edu</a> if you want to chat or work together!</p>

                </div>
                <div className="col-6 col-sm-5">
                    <img className="about-img" src={ProfileImg} alt="Profile pic"/>
                </div>
            </div>
        )
    }
}

export default AboutPage;