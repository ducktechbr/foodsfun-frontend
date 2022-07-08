import React from "react";
import Modal from "react-modal";

import styles from "./styles.module.css";


interface ModalPedidosProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalPedidos({ isOpen, onRequestClose } : ModalPedidosProps){

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return(
    <div className={styles.container}>
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      >
        <h1>Fala mano...</h1>
      </Modal>
    </div>
  )
}