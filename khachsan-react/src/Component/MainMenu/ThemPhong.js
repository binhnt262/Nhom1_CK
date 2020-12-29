import React, { Component } from "react";
import axios from "axios";

import UploadService from "./Upload-files";
export default class UploadFile extends Component {
  state = {
    room: {},
    rooms: [],
    form: { ten_phong: "", gia_phong: "", image: "" },
    btnName: "Save",
    btnClass: "btn btn success",
    url: "http://localhost/CuoiKi/web/khachsan-laravel/public/api/rooms",
  };
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);
    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }
  componentDidMount() {
    // UploadService.getFiles().then((response) => {
    //   console.log(response);
    //   this.setState({
    //     fileInfos: response.data,
    //   });
    // });
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let ten = event.target.elements.ten_phong.value;
    let gia = event.target.elements.gia_phong.value;

    let currentFile = this.state.selectedFiles[0];
    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    UploadService.upload(currentFile, ten, gia, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  };

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      tenPhong,
      giaPhong,
    } = this.state;
    return (
      <div style={{marginTop:"100px"}}>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        {/* <button
          className="btn btn-success"
          // disabled={!selectedFiles}
          onClick={this.upload}
        >
          Upload
        </button> */}

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        <div className="card" >
          {/* <div className="card-header">List of Files</div> */}
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="container">
          <h2>Thông tin đặt phòng</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="ten_phong">Tên phòng:</label>
              <input
                type="text"
                className="form-control"
                name="ten_phong"
                id="ten_phong"
                placeholder="Nhập tên phòng"
                value={this.state.ten_phong}
                onChange={this.handleTenPhongChange}
              />
            </div>
            <div className="form-group">
              <label for="gia_phong">Giá phòng:</label>
              <input
                type="text"
                className="form-control"
                id="gia_phong"
                name="gia_phong"
                placeholder="Nhập giá phòng"
                value={this.state.gia_phong}
                onChange={this.handleGiaPhongChange}
              />
            </div>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
