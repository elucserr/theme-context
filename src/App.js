import React, { Component } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Dummy from "./components/Dummy";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="container max-w-screen-sm mx-auto px-4">
          <div className="flex items-center h-screen">
            <div className="bg-cyan rounded p-4">
              <Body />
              <Dummy />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
