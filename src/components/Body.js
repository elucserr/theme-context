import React, { Component } from "react";
import { withTheme } from "../context/ThemeContext";

class Body extends Component {
  render() {
    const { theme } = this.props;
    const body = document.body;
    body.setAttribute("class", theme.name);
    return null;
  }
}

export default withTheme(Body);
