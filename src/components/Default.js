import React, {Component} from 'react';

export default class Default extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center">
                        <h5 className="display-3">404 Error </h5>
                        <h5>Page not Found</h5>
                        <h3>The requested URL 
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found
                        </h3>
                    </div>
                </div>
            </div>
        ) 
    }
}