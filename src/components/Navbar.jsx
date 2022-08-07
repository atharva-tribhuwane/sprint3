import React from "react";

const Navbar = () => {
  return <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around", backgroundColor:"rgb(100, 100, 221)"}}>
    <div>
      <h2 style={{color:"white"}}>ContextApi</h2>
    </div>
    <div style={{color:"white"}}>
      <span style={{marginRight:"20px", cursor:"pointer"}}>Home</span>
      <span style={{marginLeft:"20px", cursor:"pointer"}}>Login</span>
    </div>
  </div>
};

export default Navbar;
