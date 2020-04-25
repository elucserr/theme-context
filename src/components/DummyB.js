import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class DummyB extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <div>
            dentro de Dummy B {theme.name}
            <button
              style={{
                backgroundColor: theme.background,
                color: theme.color,
              }}
              onClick={changeTheme}
            >
              -> change theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
