import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Dummy from "./components/Dummy";
import Body from "./components/Body";

export const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
    color: "red",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#222222",
    color: "white",
  },
};

class App extends Component {
  state = {
    theme: themes.light,
  };

  changeTheme = () => {
    console.log("log");
    this.setState({
      theme: this.state.theme.name === "dark" ? themes.light : themes.dark,
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme,
        }}
      >
        <div className="container max-w-screen-sm mx-auto px-4">
          <div className="flex items-center h-screen">
            <div className="bg-cyan rounded p-4">
              <Body />
              <Dummy />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
