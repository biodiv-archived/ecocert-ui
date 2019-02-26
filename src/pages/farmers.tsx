import "./collection-center/collection-center.scss";

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
        <h1 className="eco--title">Farmer(s)</h1>
        <div className="bx--row">
          <DashListComponent
            title="Add Farmer"
            description="Create farmer Id"
            to="/collection-center/farmer/add"
          />
          <DashListComponent
            title="View Farmers"
            description="View farmers"
            to="/wip"
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
