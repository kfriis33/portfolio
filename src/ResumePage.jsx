import React, { Component } from 'react';
import resume from './assets/placeholder_resume.pdf';
// import { OpenInNew } from '@material-ui/icons';

class ResumePage extends Component {
    constructor(props) {
        super(props);
      }

    render(){    
        return (
            <div id="resume-container">
                <iframe src={resume} width="100%" height="850px"></iframe>
            </div>
        );
    }
}

export default ResumePage;