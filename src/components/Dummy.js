import React, { Component } from "react";
import DummyChild from "./DummyChild";
import DummyB from "./DummyB";
import { Theme } from "../context/ThemeContext";

export default class Dummy extends Component {
  render() {
    console.log("render dummy");
    return (
      <div>
        <DummyChild />
        <DummyB property="me" ta="jorge" />
        <Theme
          render={({ theme }) => {
            console.log("theme", theme);
            return <div>{theme.name} asdfa</div>;
          }}
        />
      </div>
    );
  }
}
