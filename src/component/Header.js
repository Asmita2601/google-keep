import React from "react";
import keep from "../images/keep.jpeg";
const Header = () =>{
  return (
    <>
      <div className="header">
        <img src={keep} alt="logo" width='70' height='65'/>
        <h1 className="heading">Asmita Keep</h1>
      </div>
    </>
  )
};
export default Header;