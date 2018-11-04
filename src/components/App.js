import React, { Component } from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}
