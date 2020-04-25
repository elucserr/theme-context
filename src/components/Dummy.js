import React, { Component } from "react";
import DummyChild from "./DummyChild";
import DummyB from "./DummyB";

export default class Dummy extends Component {
  render() {
    return (
      <div>
        <DummyChild />
        <DummyB />
      </div>
    );
  }
}
