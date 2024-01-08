import React, { useState } from "react";
import "../components/ModalForm.css";
function ModalForm() {
  const [phone, setPhone] = useState("");
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [dob, SetDob] = useState("");
  const [modalState, setModalState] = useState(false);

  const openModal = () => {
    // if (!modalState) setModalState(true);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const validateDate = (e) => {
    let inputDate = new Date(e.target.value);
    let currentDate = new Date();
    // console.log(inputDate, inputDate, "dates");
    // console.log(inputDate.getDate(), "input date");
    // console.log(currentDate.getDate(), "current date");
    if (inputDate.getDate() === currentDate.getDate()) {
      alert("Invalid date of birth. Date of birth cannot be in future");
    }
  };
  function validatePhone(input_phone) {
    // return input_phone.replace(/\D/g, "").length == 10;
    if (input_phone.length !== 10)
      alert("Invalid phone number. Please enter a 10-digit phone number.");
  }

  const handleSubmit1 = (e) => {
    e.preventDefault();
    // if (
    //   e.target.name === "phone" &&
    //   e.target.value.replace(/\D/g, "").length !== 10
    // ) {
    //   alert("Invalid phone number. Please enter a 10-digit phone number.");
    // }

    if (validatePhone(phone));
    // if (validateDate(e));
    setPhone([]);
    SetDob("");
    SetEmail("");
    SetUsername("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

    setPhone("");
    SetDob("");
    SetEmail("");
    SetUsername("");
    e.target.value = "";
    // closeModal();
    console.log(phone, dob);
  };

  return (
    <>
      <div className="modal">
        <h1>User Details Modal</h1>
        <button className="btn" onClick={openModal}>
          Open Form
        </button>
        <div className={`modal-content ${modalState ? "open" : ""}`}>
          {modalState && (
            <form className="form" onSubmit={handleSubmit}>
              <label>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={(e) => SetUsername(e.target.value)}
              ></input>

              <label>Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => SetEmail(e.target.value)}
              ></input>

              <label>Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                  // console.log(phone.length + 1);
                }}
              ></input>

              <label>Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                onChange={(e) => {
                  SetDob(e.target.value);
                  // console.log(e.target.valueAsDate);
                  // validateDate(e);
                }}
              ></input>

              <button className="btn">Submit</button>
            </form>
          )}
        </div>
        {modalState && <div className="overlay" onClick={closeModal}></div>}
      </div>
    </>
  );
}

export default ModalForm;
