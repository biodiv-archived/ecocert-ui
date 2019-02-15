import { Link } from "gatsby";
import React, { PureComponent } from "react";
import { FormBuilder, Validators } from "react-reactive-form";
import { connect } from "react-redux";

import Layout from "../../components/core/layout.component";
import SEO from "../../components/core/seo.component";
import { ICounter, ICounterFuncs } from "../../interfaces/counter.interface";
import actions from "../../modules/actions";

interface IProps extends ICounterFuncs {
  counter: ICounter;
}

class CollectionCenterPage extends PureComponent<IProps> {
  render() {
    return (
      <Layout {...this.props}>
        <ul>
          <li>
            <Link to="/collection-center/collect">Collect</Link>
          </li>
          <li>
            <Link to="/collection-center/batch">Create Batch</Link>
          </li>
        </ul>
        {/* <Link to="/co-operative">co-operative</Link> */}
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(CollectionCenterPage);
