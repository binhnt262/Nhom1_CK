import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
            <div className="container">
              <div className="masthead-subheading">Chào Mừng Bạn Đến Với Khách Sạn Của Chúng Tôi</div>
              <div className="masthead-heading text-uppercase">YOU ARE WELLCOME</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">TÌM HIỂU THÊM</a>
            </div>
          </header>
        );
    }
}

export default Header;