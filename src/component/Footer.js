import React from "react";

const Eooter = () =>{
    const year = new Date().getFullYear();
  return (
    <>
<footer>
    <p className="copyright"> copyright {year}</p>
</footer>
    </>
  )
};
export default Eooter ;