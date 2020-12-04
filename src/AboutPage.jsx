import React, {Component} from 'react'
import ProfileImg from './assets/profile.png'
class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <h3>Hi!</h3>
                    <p>I'm a senior at Brown University studying Computer Science. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>I am passionate about tackling the environmental issues of our century and am always interested in learning more about technological and non-technological ways of mitigating and adapting to climate change. </p>
                    <p>I love rock climbing, playing ping pong, and exploring new places.</p>
                </div>
                <div className="col-lg-6">
                    <img className="about-img" src={ProfileImg} alt="Picture of me"/>
                </div>
            </div>
        )
    }
}

export default AboutPage;