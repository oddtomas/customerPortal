import React from "react";
import { Link } from "react-router-dom";

export default class Bar extends React.Component {
  render() {
    return (
      <div><Link to="../foo">Foo</Link> Bar</div>
    );
  }
}