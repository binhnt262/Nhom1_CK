import React, { Component } from 'react';

class LienHe extends Component {
    render() {
        return (
          <div className="col-lg-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-13">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={this.props.anh} alt />
                      <h4>{this.props.ten}</h4>
                      <p className="text-muted">{this.props.chucvu}</p>
                      <p className="text-muted">HotLine:{this.props.sdt}</p>
                        <a className="" href=""><i className="" />{this.props.icon1}</a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" />{this.props.linkin}</a>
                  </div>
                </div>
               </div>
            </div>
    
          </div>
        );
    }
}

export default LienHe;