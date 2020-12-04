import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

class TechnoOptimism extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>     
                <div className="row align-items-end justify-content-between">
                <div className="col-md-8">
                  <h3><i>Data Viz</i></h3>
                  <h1>Visualizing Techno-Optimism</h1>
                  </div>
                </div>
                <hr></hr>
                <h3>Overview & Goals</h3>
                <p>
                </p>

                <h3>Final Application & Code</h3>
                <p> Check out the <a href="">final web application</a> and the project's <a href="">source code on GitHub</a>!</p>
          
            </div>
        )
    }
}

export default TechnoOptimism;