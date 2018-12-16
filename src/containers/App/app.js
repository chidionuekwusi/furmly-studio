import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { injectFontsAndCSSBase, ThemeProvider } from "furmly-base-web";
import Login from "../Login";
import Home from "../Home";
import "./style.scss";

injectFontsAndCSSBase();
const defaultTheme = {
  labelBackgroundColor: "white",
  formComponentBackgroundColor: "transparent",
  labelColor: "rgb(28, 27, 47)",
  accentColor: "orange",
  factor: 1.2,
  modalBackgroundColor: "#ffd3d3",
  errorColor: "#ab0101",
  errorForeground: "white"
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div className={"wrapper"}>
          <Router>
            <Switch>
              <Route path="/" component={Login} />
              <Route path="/home" component={Home} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
