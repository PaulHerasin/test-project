import React from "react";
import { Modal } from "antd";

const ModalAuthentication = () => {
  //   state = { visible: false };

  //   showModal = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   handleOk = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   handleCancel = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  return (
    <Modal
    //   title="Basic Modal"
    // visible={true}
    //   onOk={this.handleOk}
    //   onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ModalAuthentication;
