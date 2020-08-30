import React, { Component } from "react";
import ModalStyle from './Modal.styled';
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {

    // shouldComponentUpdate (nextProps, nextState) {
    //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    // }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <ModalStyle show={this.props.show}>
          {this.props.children}
        </ModalStyle>
      </>
    );
  }
}

export default Modal;