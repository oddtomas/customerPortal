import React from "react";
import { Link } from "react-router-dom";

export default class Foo extends React.Component {
  render() {
    return (
      <div>Foo <Link to="../bar">Bar</Link></div>
    );
  }
}