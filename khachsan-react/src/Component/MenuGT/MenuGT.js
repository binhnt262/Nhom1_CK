import React, { Component } from 'react';

class MenuGT extends Component {
    render() {
        return (
            <div className="col-lg-12">
            <section class="page-section" id="services">
                <div className="gt">
                  <h2 className="section-heading text-uppercase">{this.props.gioithieu}</h2>
                  <h3 className="section-subheading text-muted">{this.props.gioithieu2}</h3>
                  </div>
           </section>
           </div>
        );
    }
}

export default MenuGT;