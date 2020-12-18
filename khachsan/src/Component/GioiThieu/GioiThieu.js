import React, { Component } from 'react';

class GioiThieu extends Component {
    render() {
        return (
            <div className="col-lg-4"> 
                <div className="row text-center">
                  <div className>
                    <div>
                    <span className="fa-stack fa-4x">
                      <i className="">{this.props.icon}</i>
                      <i className="">{this.props.icon1}</i>
                    </span>
                    </div>
                    <div classname="col-lg-16">
                      <h4 className="my-4">{this.props.tieude}</h4>
                      <p className="text-muted">{this.props.mieuta}</p>
                    </div>
                  </div>
                </div>      
              </div>
        )
    }
}

export default GioiThieu;