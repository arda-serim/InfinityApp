import { Modal } from "antd";
import { useState } from "react";

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
      <Modal title={props.title ? props.title : 'ERROR OCCURED'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={props.style}>
         <p>{props.message}</p>
      </Modal>

   )
}

export default ModalComponent;