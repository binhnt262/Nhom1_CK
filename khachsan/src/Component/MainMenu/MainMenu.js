import React, { Component } from 'react';
import Modal from "react-modal";
import axios from "axios";
import http from "../MainMenu/http-common";
import UploadService from "../MainMenu/Upload-files";


class MainMenu extends Component {
  componentDidMount() {
    UploadService.getFiles().then((response) => {
      console.log(response);
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  getFiles() {
      var img = http.get("/TestUpFile/khachsan-laravel/public/api/rooms")
    return img;
  
  }
   
  
    render() {
        return (
        
      <div className="col-lg-4">
        
        <section className="page-section2 bg-light" id="portfolio">  
        <div className="container">
          <div className="text-center">
          <div className="row">
            <div className="col-lg-16">
              <div className="portfolio-item">
              <div classname="col-lg-16">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <img className="img-fluid" src={this.props.anh} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">{this.props.tieude}</div>
                  <div className="portfolio-caption-subheading text-muted">{this.props.giatien}</div>
                  <div className="btn btn-info">Đặt phòng</div>
                </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
      </section>
      </div>
        );
    }
}
// state = {
//   selectFile: null
// };
// onFileChange = event => {
//   this.setState({selectFile: event.target};
//     onFileUpload=()=>{
//       const formData = new FormData();
//     }
//     )
// }


export default MainMenu;