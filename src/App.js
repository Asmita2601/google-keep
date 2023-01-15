import React, { useState } from "react";
import Header from "./component/Header";
import CreateNote from "./component/CreateNote";
import Footer from "./component/Footer";
import Note from "./component/Note";
// import { valueToPercent } from "@mui/base";

const App = () =>{
  const [addItem, setAddItem]= useState([]);

  const addNote = (note) =>{
    // alert("I am clicked");
setAddItem((prevData) =>{
  return [...prevData, note];
});

console.log(note);
  };
const onDelete = (id) => {
  setAddItem((olddata) =>
  olddata.filter((currdata, indx) => {
    return indx !==id;
  })
  );
};
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

     {addItem.map((val, index) => {
      return (
        <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
      );
     })}


     <Footer />
    </>
  )
};
export default App;
