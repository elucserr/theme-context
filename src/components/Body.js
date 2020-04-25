import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class Body extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { theme } = value;
          const body = document.body;
          body.setAttribute("class", theme.name);
          return null;
        }}
      </ThemeContext.Consumer>
    );
  }
}
