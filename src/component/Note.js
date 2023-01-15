import React from "react";
import { MdDeleteOutline} from "react-icons/md";

const Note = (props) =>{
  const deleteNote = () => {
    props.deleteItem(props.id);
  }
  return (
    <>
    <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote} >
        <MdDeleteOutline className="deleteIcon" />
        </button>
    </div>  
     
    </>
  )
};
export default Note;