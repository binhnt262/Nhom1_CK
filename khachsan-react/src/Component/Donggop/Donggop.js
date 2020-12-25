import React, { Component } from 'react';

class Donggop extends Component {
    state={
      form:{name:"", email:"", sdt:"", content:""},
    }
    isEmpty(obj){
      return Object.entries(obj).length===0 &&obj.constructor===Object;
  }
  componentDidUpdate(prevProps, prevState) {
      if(prevProps!== this.props && !this.isEmpty(this.props.fb))
      {
          this.setState({
              form:{...this.props.fb},
            
          });
      }
  }
  handleChange = event =>{
      const{name, value}= event.target;
      let form = this.state.form;
      form[name]= value;
      this.setState({form});
  }
  thongbao = (event) =>{
      //prevent on submit
      event.preventDefault();

      //form validation
      if(this.formValidation()){
      //    console.log('ready to create'); 
      //send data to app
      this.props.thongbao(this.state.form);
      //clear form fields
      this.clearFormFields();
  };
  };
  formValidation=()=>{
      if(document.getElementsByName("name")[0].value===""){
          alert('Nhap ten ');
          return false;
      }
      if(document.getElementsByName("email")[0].value===""){
          alert('Nhap email');
          return false;
      }
      if(document.getElementsByName("sdt")[0].value===""){
        alert('Nhap sdt');
        return false;
    }
    if(document.getElementsByName("content")[0].value===""){
      alert('Nhap content');
      return false;
  }
      return true;
  }
  clearFormFields=()=>{
      //change form state
      this.setState({
       form:{name:"", email:"",sdt:"",content:""}
      });
      //change the button to save
      
      //clear
    
      // document.querySelector(".form").reset();
  };
  
  
  // thongbao  = () => {alert("Xác nhận gửi! Cảm ơn về ý kiến đóng góp của quý khách!")}
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
                      <input className="form-control" id="name" name ="name" type="text" placeholder="Tên của bạn *" required="required" data-validation-required-message="Please enter your name." onChange={this.handleChange} value={this.state.form.name} />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" name="email" type="email" placeholder="Email *" required="required" data-validation-required-message="Please enter your email address." onChange={this.handleChange} value={this.state.form.email}/>
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group mb-md-0">
                      <input className="form-control" id="phoneư===" name="sdt" type="tel" placeholder="Số điện thoại *" required="required" data-validation-required-message="Please enter your phone number." onChange={this.handleChange} value={this.state.form.sdt} />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group form-group-textarea mb-md-0">
                      <textarea className="form-control" id="message" name="content" placeholder="Phản hồi... *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} onChange={this.handleChange} value={this.state.form.content} />
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