import React, { Component } from 'react';
// import React, {useState} from "react";
import Modal from "react-modal";
// import Modal from "react-modal";
import axios from "axios";

import http from "../MainMenu/http-common";
import UploadService from "../MainMenu/Upload-files";

  

 class MainMenu extends Component {
  
  state={
    customer: {},
    customers: [],
    form:{email:"", ho_ten:"",ngay_den:"",ngay_di:"",sdt:""},
    url: "http://localhost/CuoiKi/web/khachsan-laravel/public/api/customers",
   
};
  constructor(props){
    super(props);
    this.state = {
      trangThai:0
    }
  }
  
isEmpty(obj){
  return Object.entries(obj).length === 0 && obj.constructor ===Object;
}
handleChange = event =>{
  const {name, value}=event.target;
  let form = this.state;
  form[name] = value;
  this.setState({form});
}
formValidation = ()=>{
  if(document.getElementsByName("email")[0].value === ""){
      alert("nhập email");
      return false;
  }
  if(document.getElementsByName("ho_ten")[0].value === ""){
      alert("nhập họ tên");
      return false;
  }
  if(document.getElementsByName("ngay_den")[0].value === ""){
      alert("nhập ngày đến");
      return false;
  }
  if(document.getElementsByName("ngay_di")[0].value === ""){
      alert("nhập ngày đi");
      return false;
  }
  if(document.getElementsByName("sdt")[0].value === ""){
      alert("nhập số điện thoại");
      return false;
  }
  // alert("Đặt phòng thành công!");
  return true;
  
}
onFormSubmit = event=>{
  event.preventDefault();
  if(this.formValidation()){
      this.props.onFormSubmit(this.state.form);
  };
}
getCustomers = async () =>{
      
      const customers = await axios.get(this.state.url);
      this.setState({customers: customers.data});
    }
    createCustomer = async data=>{
      this.setState({loader:true});
      await axios.post(this.state.url,{
        email: data.email,
        ho_ten: data.ho_ten,
        ngay_den: data.ngay_den,
        ngay_di: data.ngay_di,
        sdt: data.sdt
      });
      this.getCustomers();
  }
  onFormSubmit = data =>{
      // console.log("app", data);
      this.createCustomer(data);
      alert("Đặt phòng thành công!");
   }
  renderButton = ()=>{ 
    return(
    <div className="row">
    <div className="btn_dp">
        <div className="btn btn-block btn-info"  onClick={()=>this.datphongClick()}>Đặt phòng</div>
    </div>
    </div>
    )
}
renderForm = ()=>(
  <div className="container">
  <h2>Thông tin đặt phòng</h2>
  <form>
    <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" 
        className ="form-control" 
        name="email"
        id="email" placeholder="Nhập email" 
        value={this.state.email}
        onChange={this.handleChange}/>
    </div>
    <div className="form-group">
        <label for="hoten">Họ Tên:</label>
        <input type="text" className ="form-control" 
        id="hoten" 
        name="ho_ten"
        placeholder="Nhập họ tên"
        value={this.state.ho_ten}
        onChange={this.handleChange}/>
    </div>
    <div className="form-group">
        <label for="ngayden">Ngày đến:</label>
        <input type="date" className ="form-control"
         id="ngayden" placeholder=""
         name="ngay_den"
        value={this.state.ngay_den}
        onChange={this.handleChange}/>
    </div>
    <div className="form-group">
        <label for="ngaydi">Ngày đi:</label>
        <input type="date" 
        className ="form-control" 
        id="ngaydi" placeholder=""
        name="ngay_di"
        value={this.state.ngay_di}
        onChange={this.handleChange}/>
    </div>
    <div className="form-group">
        <label for="sdt">Nhập số điện thoại:</label>
        <input type="text" 
        className ="form-control" id="sdt" 
        placeholder="Nhập số điện thoại"
        name="sdt"
        value={this.state.sdt}
        onChange={this.handleChange}/>
    </div>
   
    <div className="checkbox">
        <button className="btn btn-success" 
       onClick={()=>this.saveClick()} 
       onClick={this.onFormSubmit}>
          Save </button>
    </div>
  </form>
</div>
    
)
displaycheck = ()=>{
  if(this.state.trangThai===0){
      return this.renderButton();
  }
  else{
      return this.renderForm();
  }
}
saveClick = ()=>{
  this.setState({trangThai:0});
 
}
datphongClick = ()=>{
  this.setState({trangThai:1});
}

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      console.log(response);
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  getFiles() {
      // var img = http.get("/TestUpFile/khachsan-laravel/public/api/rooms")
      var img = http.get("/CuoiKi/web/khachsan-laravel/public/api/rooms")
      
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
                {this.displaycheck()}
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