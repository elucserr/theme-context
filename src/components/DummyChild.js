import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class DummyChild extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div
              style={{
                backgroundColor: theme.background,
                color: theme.color,
              }}
            >
              {" "}
              {theme.name}{" "}
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
