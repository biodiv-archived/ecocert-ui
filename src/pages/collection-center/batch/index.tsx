import React, { PureComponent } from "react";
import { connect } from "react-redux";

import CreateBatchingTableComponent from ".@components/collection-center/createBatchingTable.component";
import Layout from ".@components/core/layout.component";
import SEO from ".@components/core/seo.component";
import { IBatching, IBatchingFuncs } from ".@interfaces/batching.interface";
import actions from ".@modules/actions";

interface IProps extends IBatchingFuncs {
  batching: IBatching;
}

class BatchingPage extends PureComponent<IProps> {
  render() {
    return (
      <Layout {...this.props}>
        <SEO title="Collections" />
        <CreateBatchingTableComponent {...this.props} />
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(BatchingPage);
