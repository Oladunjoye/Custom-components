import React from "react";
import { Switch } from "./switch";

const ToggleContext = React.createContext();

class Toggle extends React.Component {
  state = {
    on: false,
    toggle: () => {
      this.setState(
        {
          on: !this.state.on
        },
        () => this.props.onToggle(this.state.on)
      );
    }
  };

  static On = props => (
    <ToggleContext.Consumer>
      {context => <div>{context.on ? props.children : null}</div>}
    </ToggleContext.Consumer>
  );
  static Off = props => (
    <ToggleContext.Consumer>
      {context => <div>{!context.on ? props.children : null}</div>}
    </ToggleContext.Consumer>
  );

  static Button = ({ props }) => (
    <ToggleContext.Consumer>
      {context => <Switch on={context.on} onClick={context.toggle} />}
    </ToggleContext.Consumer>
  );

  //   render() {
  //     return React.Children.map(this.props.children, child =>
  //       React.cloneElement(child, { on: this.state.on, toggle: this.toggle })
  //     );
  //   }

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default Toggle;
