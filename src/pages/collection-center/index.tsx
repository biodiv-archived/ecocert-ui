import "./collection-center.scss";

import React, { PureComponent } from "react";
import { connect } from "react-redux";

import DashListComponent from ".@components/collection-center/dashList.component";
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
      <Layout>
        <SEO title="Collection Center" />
        <h1 className="eco--title">Traceability</h1>
        <div className="bx--row">
          <DashListComponent
            title="Collect"
            description="Coffee from farmers"
            to="/collection-center/collect"
          />
          <DashListComponent
            title="Create Batch"
            description="Create batch from collections"
            to="/collection-center/batch"
          />
        </div>
        <h1 className="eco--title">Manage Users</h1>
        <div className="bx--row">
          <DashListComponent
            title="Add Farmer"
            description="Create farmer Id"
            to="/collection-center/farmer/add"
          />
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(CollectionCenterPage);
