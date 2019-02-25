import { Link } from "gatsby";
import React from "react";

interface IProps {
  title: string;
  description: string;
  to: string;
}

export default function dashListComponent(props: IProps) {
  return (
    <div className="bx--col-md-3 bx--col-xs-12 eco--spacing-bottom">
      <Link className="bx--tile eco--card" to={props.to}>
        <h2>{props.title}</h2>
        <p>{props.description} &rarr;</p>
      </Link>
    </div>
  );
}
