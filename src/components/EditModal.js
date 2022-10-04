import React, { useState } from "react";
import styles from "./EditModal.module.css";
const EditModal = (props) => {
  const [dataToEdit, setDataToEdit] = useState(props.incomingEdit);
  const [fnstate, setFnstate] = useState("");
  const [lnstate, setLnstate] = useState("");
  const [agestate, setAgestate] = useState("");
  const modalCloseHandler = () => {
    props.onClose();
  };
  const editHandler = (data, e) => {
    e.preventDefault();
    console.log(data);

    const newData = [
      {
        id: data.id,
        firstname: fnstate,
        lastname: lnstate,
        age: agestate,
      },
    ];
    newData[0].firstname = fnstate ? fnstate : dataToEdit.firstname;
    newData[0].lastname = lnstate ? lnstate : dataToEdit.lastname;
    newData[0].age = agestate ? agestate : dataToEdit.age;

    props.editedDataComingToScreen(newData);

    console.log(newData);
  };
  //Handler Functions START 👇
  const firstnameHandler = (event) => {
    setFnstate(event.target.value);
  };
  const lastnameHandler = (event) => {
    setLnstate(event.target.value);
  };
  const ageHandler = (event) => {
    setAgestate(event.target.value);
  };
  //Handler Functions End 👆
  return (
    <>
      <div className={styles["whole-page"]} onClick={modalCloseHandler}></div>
      <div className={styles["modal-container"]}>
        <form className={styles["modal-form"]}>
          <label>First Name:</label>
          <input
            type="Text"
            defaultValue={dataToEdit.firstname}
            onChange={firstnameHandler}
          />
          <label>last Name:</label>
          <input
            type="Text"
            defaultValue={dataToEdit.lastname}
            onChange={lastnameHandler}
          />
          <label>Age:</label>
          <input
            type="Text"
            defaultValue={dataToEdit.age}
            onChange={ageHandler}
          />
          <button onClick={(e) => editHandler(props.incomingEdit, e)}>
            Edit
          </button>
          <button onClick={modalCloseHandler}>close</button>
        </form>
      </div>
    </>
  );
};

export default EditModal;
