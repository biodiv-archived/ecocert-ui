import "../../styles/core.scss";

import { graphql, StaticQuery } from "gatsby";
import React from "react";

import HeaderComponent from "./header.component";

const layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
        <div className="bx--grid eco--grid">{children}</div>
      </>
    )}
  />
);

export default layout;
