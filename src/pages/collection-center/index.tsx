import "./collection-center.scss";

import { Link } from "gatsby";
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Layout from ".@components/core/layout.component";
import SEO from ".@components/core/seo.component";
import { ICounter, ICounterFuncs } from ".@interfaces/counter.interface";
import actions from ".@modules/actions";

interface IProps extends ICounterFuncs {
  counter: ICounter;
}

class CollectionCenterPage extends PureComponent<IProps> {
  render() {
    return (
      <Layout {...this.props}>
        <SEO title="Collection Center" />
        <div className="bx--row">
          <div className="bx--col-md-3 bx--col-xs-12 eco--spacing-top">
            <Link
              className="bx--tile eco--card"
              to="/collection-center/collect"
            >
              <h2>Collect</h2>
              <p>Coffee from farmers &rarr;</p>
            </Link>
          </div>
          <div className="bx--col-md-3 bx--col-xs-12 eco--spacing-top">
            <Link className="bx--tile eco--card" to="/collection-center/batch">
              <h2>Create Batch</h2>
              <p>Create batch from collections &rarr;</p>
            </Link>
          </div>
          <div className="bx--col-md-3 bx--col-xs-12 eco--spacing-top">
            <Link
              className="bx--tile eco--card"
              to="/collection-center/farmer/add"
            >
              <h2>Add Farmer</h2>
              <p>Create farmer Id &rarr;</p>
            </Link>
          </div>
        </div>
        {/* <Link to="/co-operative">co-operative</Link> */}
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(CollectionCenterPage);
