import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";

import Layout from ".@components/core/layout.component";
import SEO from ".@components/core/seo.component";
import { ICounter, ICounterFuncs } from ".@interfaces/counter.interface";
import actions from ".@modules/actions";

interface IProps extends ICounterFuncs {
  counter: ICounter;
}

class Index extends PureComponent<IProps> {
  render() {
    return (
      <>
        <Layout {...this.props}>
          <SEO title="Home Page" />
        </Layout>
        <Carousel showArrows={true} showThumbs={false}>
          <div style={{ background: "url(1.jpg)" }} />
          <div style={{ background: "url(2.jpg)" }} />
          <div style={{ background: "url(3.jpg)" }} />
        </Carousel>
      </>
    );
  }
}

export default connect(
  state => state,
  actions
)(Index);
