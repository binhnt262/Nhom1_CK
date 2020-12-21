import React, { Component } from 'react';

class TrangChu extends Component {
    render() {
        return (
            <section className="page-section" id="about">
<div className="container">
  <div className="text-center">
    <h2 className="section-heading text-uppercase">HÀNH TRÌNH</h2>
    <h3 className="section-subheading text-muted">Cùng nhìn lại hành trình của chúng tôi nhé!</h3>
  </div>
  <ul className="timeline">
    <li>
      <div className="timeline-image"><img className="rounded-circle img-fluid-tc" src="assets/img/about/1.jpg" alt="" /></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>2009-2011</h4>
          <h4 className="subheading">Dự Án Được Thi Công</h4>
        </div>
        <div className="timeline-body"><p className="text-muted">Khách sạn của chúng tôi được đưa vào hoạt động sau 2 năm thi công, với đội ngũ kỹ sư giỏi chúng tôi tin rằng bạn cũng sẽ yêu thích các thiết kế đó. </p></div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-image"><img className="rounded-circle img-fluid-tc" src="assets/img/about/2.jpg" alt="" /></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>Tháng 8-2017</h4>
          <h4 className="subheading">Nhận giải thưởng đầu tiên</h4>
        </div>
        <div className="timeline-body"><p className="text-muted">Tại lễ trao giải The Guide Award 2017 tổ chức tại Hà Nội, khách sạn WEST tại Đà Nẵng vinh dự đón nhận giải thưởng "Khách sạn lưu trú xuất sắc" cho những thành tích về chất lượng và những đóng góp dành cho ngành du lịch.</p></div>
      </div>
    </li>
    <li>
      <div className="timeline-image"><img className="rounded-circle img-fluid-tc" src="assets/img/about/3.jpg" alt="" /></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>Tháng 11-2018</h4>
          <h4 className="subheading">Mở rộng đầu tư</h4>
        </div>
        <div className="timeline-body"><p className="text-muted">Tháng 11-2018, khách sạn mở rộng kế hoạch đầu tư kinh doanh, ngoài việc kinh doanh lưu trú, khách sạn còn tổ chức cho thuê phòng tổng thống để tổ chức cưới, hỏi, sự kiện. Đáp ứng đa yêu cầu của khách hàng.</p></div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-image"><img className="rounded-circle img-fluid-tc" src="assets/img/about/4.jpg" alt="" /></div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>2020</h4>
          <h4 className="subheading">Đầu tư chứng khoán</h4>
        </div>
        <div className="timeline-body"><p className="text-muted">Năm nay, tháng 12 vừa qua, cùng với sự hỗ trợ của các nhà đầu tư, WEST của chúng tôi vinh dự chính thức được đưa lên sàn chứng khoán kinh doanh. Đây là một bước tiến mới mà WEST vinh dự được sau quãng thời gian hoạt động không ngừng nghỉ</p></div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-image">
        <h4>
          Be Part
          <br />
          Of Our
          <br />
          Story!
        </h4>
      </div>
    </li>
  </ul>
</div>
</section>
        );
    }
}

export default TrangChu;