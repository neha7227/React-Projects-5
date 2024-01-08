import React, { useState } from "react";
import "../components/ModalForm.css";
import ModalForm from "./ModalForm_bkp";

function ModalApp() {
  const [modalState, setModalState] = useState(false);
  const handleModal = () => {
    if (!modalState) setModalState(true);
    else setModalState(false);
  };
  const closeModal = () => {
    setModalState(false);
  };
  return (
    <div className="app-body">
      <h1>User Details Modal</h1>
      <button className="btn" onClick={handleModal}>
        Open Form
      </button>
      {modalState && <ModalForm handleModal={closeModal} />}
    </div>
  );
}

export default ModalApp;
