import React, { Component } from 'react';
import axios from "axios";
import Donggop from "./Donggop";
// import "./App.css";
class Phanhoi extends Component {
  state={
    feedback:[],
    fb:{},
    url:"http://localhost/CuoiKi/web/khachsan-laravel/public/api/feedback"
  }
  
  getFeedback = async()=>{
    const feedback = await axios.get(this.state.url);
    this.setState({feedback:feedback.data});
  }
  createFeedback = async(data)=>{
    await axios.post(this.state.url,{
      name:data.name,
      email:data.email,
      sdt:data.sdt,
      content: data.content
    });
    this.getFeedback();
  }
  componentDidMount() {
    this.getFeedback();
  }
  thongbao =(data)=>{
    this.createFeedback(data);
    alert("Cảm ơn quý khách đã để lại phản hồi cho chúng tôi!");
  }
  
  render() {
    return (
      <div>
          <Donggop fb={this.state.fb} thongbao={this.thongbao}/>
      </div>
    );
  }
}

export default Phanhoi;