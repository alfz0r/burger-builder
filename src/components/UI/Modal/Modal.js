import React, { Component } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shoudlComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentWillUpdate() {}
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
          <div
            className={classes.Modal}
            style={{
              transofrm: this.props.show
                ? "translateY(0)"
                : "translateY(-100vh)",
              opacity: this.props.show ? "1" : "0",
              // zIndex: props.show ? '500' : '-10'
            }}
          >
            {this.props.children}
          </div>
        </Backdrop>
      </Aux>
    );
  }
}
export default Modal;
