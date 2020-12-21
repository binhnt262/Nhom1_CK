import React, { Component } from 'react';

class TopMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-info fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="logo.png" alt="" /></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ml-1" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Giới thiệu</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Đặt phòng</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Hành trình</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Liên hệ</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Phản hồi</a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default TopMenu;