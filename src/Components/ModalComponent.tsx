import { Modal } from "antd";
import { useState } from "react";
import { ML } from "../App";

const ModalComponent = (props:any) => {

   const [isModalVisible, setIsModalVisible] = useState(props.modalVisibility);

   const handleOk = () => {
      setIsModalVisible(false);
      props.onClear();
   };

   const handleCancel = () => {
      setIsModalVisible(false);
      props.onClear();
   };

   return (
      <Modal title={props.title ? props.title : ML('errorOccured') } visible={isModalVisible} okButtonProps={props.loading && { loading: true }}
      cancelButtonProps={ props.loading && { loading: true }} onOk={handleOk} onCancel={handleCancel} style={props.style}>
         <p>{props.message}</p>
      </Modal>

   )
}

export default ModalComponent;