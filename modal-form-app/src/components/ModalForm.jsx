import React, { useState } from "react";
import "../components/ModalForm.css";
function ModalForm() {
  const [phone, setPhone] = useState("");
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [dob, SetDob] = useState("");
  const [modalState, setModalState] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    username: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const openModal = () => {
    // if (!modalState) setModalState(true);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  // const validateDate = (e) => {
  // let inputDate = new Date(e.target.value);
  // let currentDate = new Date();
  // console.log(inputDate, inputDate, "dates");
  // console.log(inputDate.getDate(), "input date");
  // console.log(currentDate.getDate(), "current date");
  //   if (inputDate.getDate() === currentDate.getDate()) {
  //     alert("Invalid date of birth. Date of birth cannot be in future");
  //   }
  // };
  // function validatePhone(input_phone) {
  //   // return input_phone.replace(/\D/g, "").length == 10;
  //   if (input_phone.length !== 10)
  //     alert("Invalid phone number. Please enter a 10-digit phone number.");
  // }

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   // if (
  //   //   e.target.name === "phone" &&
  //   //   e.target.value.replace(/\D/g, "").length !== 10
  //   // ) {
  //   //   alert("Invalid phone number. Please enter a 10-digit phone number.");
  //   // }

  //   if (validatePhone(phone));
  //   // if (validateDate(e));
  //   setPhone([]);
  //   SetDob("");
  //   SetEmail("");
  //   SetUsername("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;
    if (!username || !email || !phone || !dob) {
      alert("Please fill in all fields.");
      // return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      // return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      // return;
    }

    const currentDate = new Date();
    const inputDate = new Date(dob);

    if (inputDate > currentDate) {
      alert("Invalid date of birth. Please enter a valid date.");
      // return;
    }

    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  return (
    <>
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={openModal}>
        Open Form
      </button>
      <div className="modal">
        {/* <h1>User Details Modal</h1>
        <button className="submit-button" onClick={openModal}>
          Open Form
        </button> */}
        {/* <div className={`modal-content ${modalState ? "open" : ""}`}> */}
        <div className="modal-content">
          {modalState && (
            <form className="form" onSubmit={handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={handleChange}
              ></input>

              <label>Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              ></input>

              <label>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                onChange={handleChange}
              ></input>

              <label>Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                onChange={handleChange}
              ></input>

              <button className="submit-button">Submit</button>
            </form>
          )}
        </div>
        {modalState && <div className="overlay" onClick={closeModal}></div>}
      </div>
    </>
  );
}

export default ModalForm;
