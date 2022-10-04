import React, { useState } from "react";
import NewStudent from "./components/NewStudent";
import StudentList from "./components/StudentList";
import EditModal from "./components/EditModal";

let Initial_Data = [
  { id: 1, firstname: "Milad", lastname: "Sohrabi", age: "35" },
  { id: 2, firstname: "Amin", lastname: "Bani Amerian", age: "34" },
  { id: 3, firstname: "Nima", lastname: "Abbasi", age: "36" },
  { id: 4, firstname: "Ahmad", lastname: "pouladi", age: "33" },
  { id: 5, firstname: "Shahin", lastname: "kalantari", age: "40" },
];
const App = () => {
  const [data, setData] = useState(Initial_Data);
  const [modal, setModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState([]);
  const newDataHandler = (insertedData) => {
    Initial_Data.push(insertedData[0]);
    const newData = [...Initial_Data];
    console.log(newData);
    setData(newData);
  };

  const deleteHandler = (id) => {
    const filteredData = Initial_Data.filter((item) => item.id !== id);
    Initial_Data = [...filteredData];
    setData(Initial_Data);
  };

  const editHandler = (propsarg) => {
    console.log(propsarg, "Edit");
    setDataToEdit(propsarg);
    setModal(true);
  };

  const closeModalHanlder = () => {
    setModal(false);
  };

  const editedDataBack = (newData) => {
    const filteredData = Initial_Data.filter(
      (item) => item.id !== newData[0].id
    );

    console.log(filteredData);

    Initial_Data = [...filteredData, newData[0]];
    Initial_Data.sort((a, b) => {
      return a.id - b.id;
    });
    setData(Initial_Data);
    setModal(false);
  };
  return (
    <>
      {modal ? (
        <EditModal
          onClose={closeModalHanlder}
          incomingEdit={dataToEdit}
          editedDataComingToScreen={editedDataBack}
        />
      ) : (
        ""
      )}
      <div>First Project</div>
      <NewStudent onNewData={newDataHandler} />
      {Initial_Data.length !== 0 ? (
        data.map((item) => {
          return (
            <StudentList
              key={item.id}
              firstname={item.firstname}
              lastname={item.lastname}
              age={item.age}
              id={item.id}
              onDelete={deleteHandler}
              onEdit={editHandler}
            />
          );
        })
      ) : (
        <div>List is empty</div>
      )}
    </>
  );
};

export default App;
