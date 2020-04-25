import React, { Component } from "react";
import { withTheme } from "../context/ThemeContext";

class DummyB extends Component {
  click = () => {
    console.log("click");
  };

  render() {
    const { theme, changeTheme } = this.props;
    return (
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
        <button onClick={this.click}> Ciclk</button>
      </div>
    );
  }
}

export default withTheme(DummyB);
