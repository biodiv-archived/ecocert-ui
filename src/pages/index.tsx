import { navigate } from "gatsby";
import React, { PureComponent } from "react";
import { connect } from "react-redux";

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
      <Layout {...this.props}>
        <SEO title="Home Page" />
        {/* <div>
          <p>Count: {this.props.counter.count}</p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
        <a onClick={() => navigate("/a")}>programmatic redirect</a> */}
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Index);
