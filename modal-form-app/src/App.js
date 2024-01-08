import {useState} from "react"
import './App.css';
import ModalApp from './components/ModalApp';
import ModalForm from './components/ModalForm_bkp';
import User from "./components/User.jsx"

function App() {
  // return (
  //   <div className="App">
  //     {/* <ModalApp/> */}
  //     <ModalForm/>
  //   </div>
  // );

  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">Open Form</button>
      {/* <div onClick={closeModal}> */}
      {isOpen && <User closeModal={closeModal} isOpen={isOpen} />}
      {/* </div> */}
      {/* {isOpen && <div className="overlay" onClick={closeModal}></div>} */}
    </div>
  );
};



export default App;
