import React, { Component } from 'react';

class Donggop extends Component {
  constructor(props){
    super(props);
  }
  thongbao  = () => {alert("Xác nhận gửi! Cảm ơn về ý kiến đóng góp của quý khách!")}
    render() {
        return (
            <section className="page-section" id="contact">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Phản Hồi</h2>
                <h3 className="section-subheading text-muted">Cùng gửi ý kiến phản hồi với chúng tôi để cùng nhau phát triển hơn nhé.</h3>
              </div>
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row align-items-stretch mb-5">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Tên của bạn *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group mb-md-0">
                      <input className="form-control" id="phone" type="tel" placeholder="Số điện thoại *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                      <textarea className="form-control" id="message" placeholder="Phản hồi... *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div id="success" />
                  <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit" onClick={this.thongbao}>Gửi phản hồi</button>
                </div>
              </form>
            </div>
          </section>
        );
    }
}

export default Donggop;