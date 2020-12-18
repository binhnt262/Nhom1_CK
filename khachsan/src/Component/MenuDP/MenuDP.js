// import React, { Component } from 'react';
import React, {useState} from "react";
import Modal from "react-modal";
import UploadFiles from '../MainMenu/ThemPhong.js';
// import App from "./App"
function MenuDP () {

  const[modalIsOpen, setModalIsOpen]= useState(false)
        return (
            <div className="col-lg-12">
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Đặt Phòng</h2>
                <h3 className="section-subheading text-muted">Hãy cùng khám phá các gian phòng của chúng tôi!</h3>
                <div className="UploadFile">
                  <div className="btn">
                    <button onClick={()=>setModalIsOpen(true)} className="btn btn-warning">Thêm phòng</button>
                       <Modal isOpen={modalIsOpen}>
                       <UploadFiles  style={{marginTop:"100px"}}/>
                      <button onClick={()=> setModalIsOpen(false)} className="bt btn-info" style={{marginLeft:'1190px'}}>Close</button>
                     </Modal>
                    
                     </div>
              </div>
              </div>
              </div>
              </section>
              </div>
        );
    }


export default MenuDP;