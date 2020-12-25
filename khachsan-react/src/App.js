import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import TopMenu from './Component/TopMenu/TopMenu.js';
import GioiThieu from './Component/GioiThieu/GioiThieu.js';
import Header from './Component/Header/Header.js';
import TrangChu from './Component/Trangchu/TrangChu.js';
import MainMenu from './Component/MainMenu/MainMenu.js';
import Lienhe from './Component/Lienhe/LienHe.js';
// import Phanhoi from './Component/Donggop/Phanhoi';
import MenuGT from './Component/MenuGT/MenuGT.js';
import MenuDP from './Component/MenuDP/MenuDP.js';
import MenuTC from './Component/MenuTC/MenuTC.js';
import MenuLH from './Component/MenuLH/MenuLH';

import UploadService from "./Component/MainMenu/Upload-files";
import Phanhoi from './Component/Donggop/Phanhoi';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      fileInfos: [1]
    }
  }
  // state = {
  //   url = "http://localhost/Cuoiki/web/khachsan-laravel/public/api/feedback"
  // }
  // getFeedbacks = async()=>{
  //   const feedback = await axios.get(this.state.url);
  //   this.setState({feedback:feedback.data})
  // }
  // createFeedback = async(data)=>{
  //   await axios.post(this.setState.url,{
  //     name:data.name,
  //     email:data.email,
  //     sdt:data.sdt,
  //     content:data.content
  //   });
  // }
  // componentWillMount(){
  //   this.getFeedbacks(id);
  // }
  // thongbao = (data)=>{
  //   this.createFeedback(data);
  // }
  componentWillMount() {
    UploadService.getFiles().then((response) => {
      
      console.log("List data is: "+response.data);
     
      this.setState({
        fileInfos: response.data,
      });
  
    });
  }
  // state = {
  //   customers:[],
  //   customer:{},
  //   loader:false,
  //   url:"http://localhost/Cuoiki/web/khachsan-laravel/public/api/customers"
  // }
//   getCustomers = async () =>{
//     const customers = await axios.get(this.state.url);
//     this.setState({customers: customers.data});
//   }
//   createCustomer = async data=>{
//     this.setState({loader:true});
//     await axios.post(this.state.url,{
//       email: data.email,
//       ho_ten: data.ho_ten,
//       ngay_den: data.ngay_den,
//       ngay_di: data.ngay_di,
//       sdt: data.sdt
//     });
//     this.getCustomers();
// }
// componentDidMount() {
//   this.getCustomers();
// }

// onFormSubmit = (data) =>{
//     // console.log("app", data);
//     this.createCustomer(data);
//     alert("Đặt phòng thành công!");
//  }
  render(){
    return(
      <div className="khachsan">
        <TopMenu/>
        <Header/>
        <div className= "container">
        <div className ="row pt-5">
        <MenuGT gioithieu="GIỚI THIỆU" gioithieu2="Giới thiệu về khách sạn của chúng tôi"/>
        <GioiThieu tieude ="Vị Trí" mieuta ="WEST HOTTLE của chúng tôi nằm tọa lạc trên Lô 12-13 Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng. Giao thông thuận lợi, vị trí địa lý thuận lợi khi bạn muốn nhìn ngắm ra bãi biển Mỹ Khê mộng mơ." icon={<i className="fas fa-circle fa-stack-2x text-primary"></i>} icon1={ <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>}/>
        <GioiThieu tieude ="Cơ sở vật chất" mieuta ="Khách sạn của chúng tôi với quy mô gồm 6 tầng với 36 phòng, phòng đơn, phòng đôi... Ngoài ra mỗi phòng tùy vào sự lựa chọn của bạn, cơ sở vật chất sẽ khác nhau. Hãy chọn cho mình một căn phòng lí tưởng để thưởng thức vẻ đẹp nơi đây nhé." icon={<i className="fas fa-circle fa-stack-2x text-primary"></i>} icon1={ <i className="fas fa-hotel fa-stack-1x fa-inverse"></i>} />
        <GioiThieu tieude ="Dịch vụ ăn uống" mieuta ="Ngoài phòng khách sạn, bên chúng tôi còn hỗ trợ ăn sáng. Với quý khách chọn những combo khi đặt phòng, bên chúng tôi sẽ hỗ trợ bữa sáng nhẹ cho bạn Hãy liên hệ với lễ tân khi nhận phòng nhé!" icon={<i className="fas fa-circle fa-stack-2x text-primary"></i>} icon1={<i className="fas fa-utensils fa-stack-1x fa-inverse"></i>} />
        </div>
        </div> 
        <MenuDP/>     
        <div className= "container">
        <div className ="row pt-5">

        {this.state.fileInfos.map(item => (
            <MainMenu anh={"assets/img/portfolio"+"/"+item.image} tieude={item.ten_phong} giatien={item.gia_phong}/>
          ))}

        {/* {this.state.fileInfos.map((person, index) => (
          <MainMenu anh="assets/img/portfolio/p1.jpg" tieude="Phòng đơn" giatien="750.000/đêm"/>
        ))} */}

        {/* <MainMenu anh="assets/img/portfolio/p1.jpg" tieude="Phòng đơn" giatien="750.000/đêm"/>
        <MainMenu anh="assets/img/portfolio/p2.jpg" tieude="Phòng quốc tế" giatien="2.650.000/đêm"/>
        <MainMenu anh="assets/img/portfolio/p3.jpg" tieude="Phòng đôi hướng biển" giatien="1.850.000/đêm"/>
        <MainMenu anh="assets/img/portfolio/p4.jpg" tieude="Phòng đôi" giatien="1.500.000/đêm"/>
        <MainMenu anh="assets/img/portfolio/p5.jpg" tieude="Phòng đôi" giatien="1.400.000/đêm"/>
        <MainMenu anh="assets/img/portfolio/p6.jpg" tieude="Phòng đơn nhỏ" giatien="500.000/đêm"/> */}
        </div>
        </div>
        {/* <MenuTC/> */}
        <TrangChu/>
        <MenuLH/>
        <div className= "container">
        <div className ="row pt-5">
        
        {/* {this.state.fileInfos.map((person, index) => (
          <Lienhe  anh="assets/img/team/5.jpg" ten="Nguyễn Thị Bình" chucvu="Lễ tân trưởng" sdt="026299999" icon1={<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/NTBYBTD170618/"><i className="fab fa-facebook-f" /></a>} icon2={ <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" /></a>}/>
        
        ))} */}
        
        <Lienhe anh="assets/img/team/5.jpg" ten="Nguyễn Thị Bình" chucvu="Lễ tân trưởng" sdt="026299999" icon1={<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/NTBYBTD170618/"><i className="fab fa-facebook-f" /></a>} icon2={ <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" /></a>}/>
        <Lienhe anh="assets/img/team/2.jpg" ten="Phạm Thị Quế Anh" chucvu="Trưởng ban tổ chức sự kiện" sdt="033399999" icon1={<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/NTBYBTD170618/"><i className="fab fa-facebook-f" /></a>} icon2={ <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" /></a>}/>
        <Lienhe anh="assets/img/team/3.jpg" ten="Đào Mai Chi" chucvu="Phó ban tổ chức sự kiện" sdt="044499999" icon1={<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/NTBYBTD170618/"><i className="fab fa-facebook-f" /></a>} icon2={ <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" /></a>}/>
        <Lienhe anh="assets/img/team/6.jpg" ten="Đoàn Thị Bích Ngọc" chucvu="Chăm sóc khách hàng" sdt="055599999" icon1={<a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/NTBYBTD170618/"><i className="fab fa-facebook-f" /></a>} icon2={ <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/binh_boong_262/?hl=vi"><i className="fab fa-linkedin-in" /></a>}/>
        </div>
        </div>
       <Phanhoi/>
      </div>
    );
  }
}
export default App;