import "../../styles/core.scss";

import { graphql, StaticQuery } from "gatsby";
import React from "react";

import Header from "./header.component";

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container container-spacing-initial">{children}</div>
        {/* <footer>&copy; {new Date().getFullYear()}</footer> */}
      </>
    )}
  />
);

export default layout;
