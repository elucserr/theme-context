import React, { Component } from "react";
import { withTheme } from "../context/ThemeContext";

class DummyChild extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <div
          style={{
            backgroundColor: theme.background,
            color: theme.color,
          }}
        >
          {" "}
          {theme.name}{" "}
        </div>
      </div>
    );
  }
}

export default withTheme(DummyChild);
