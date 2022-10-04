import React from "react";
import styles from "./StudentList.module.css";
const StudentList = (props) => {
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  const editHandler = (propsarg) => {
    props.onEdit(propsarg);
  };

  return (
    <div className={styles["list-container"]}>
      <span>{props.firstname}</span>
      <span>{props.lastname}</span>
      <span>{props.age}</span>
      <button
        className={styles["Del_button"]}
        onClick={() => deleteHandler(props.id)}
      >
        Delete
      </button>
      <button
        className={styles["Edit_button"]}
        onClick={() => editHandler(props)}
      >
        Edit
      </button>
    </div>
  );
};
export default StudentList;
