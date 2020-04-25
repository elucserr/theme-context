import React, { Component } from "react";

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

export const ThemeContext = React.createContext();

export class Theme extends Component {
  render() {
    const { render } = this.props;
    return (
      <ThemeContext.Consumer>{(value) => render(value)}</ThemeContext.Consumer>
    );
  }
}

export const withTheme = (Comp) => {
  return class WithTheme extends Component {
    render() {
      console.log("withTheme", this.props);
      return (
        <ThemeContext.Consumer>
          {({ theme, changeTheme, property }) => (
            <Comp
              theme={theme}
              changeTheme={changeTheme}
              property={property}
              {...this.props}
            />
          )}
        </ThemeContext.Consumer>
      );
    }
  };
};

export class ThemeProvider extends Component {
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
    const { children } = this.props;

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme,
          property: "another",
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
