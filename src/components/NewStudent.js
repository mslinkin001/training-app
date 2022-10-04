import React, { useState } from "react";
import styles from "./NewStudent.module.css";
let newId = 5;
const NewStudent = (props) => {
  const [fnstate, setFnstate] = useState("");
  const [lnstate, setLnstate] = useState("");
  const [agestate, setAgestate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const insertedData = [
      { id: ++newId, firstname: fnstate, lastname: lnstate, age: agestate },
    ];
    setAgestate("");
    setFnstate("");
    setLnstate("");
    props.onNewData(insertedData);
  };

  const clearHandler = (event) => {
    event.preventDefault();
    setAgestate("");
    setFnstate("");
    setLnstate("");
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
    <section className={styles.container}>
      <form className={styles["form-container"]} onSubmit={submitHandler}>
        <label>First Name:</label>
        <input type="Text" onChange={firstnameHandler} value={fnstate} />
        <label>last Name:</label>
        <input type="Text" onChange={lastnameHandler} value={lnstate} />
        <label>Age:</label>
        <input type="Text" onChange={ageHandler} value={agestate} />
        <button type="submit">Add</button>
        <button type="cancel" onClick={clearHandler}>
          Clear
        </button>
      </form>
    </section>
  );
};

export default NewStudent;
