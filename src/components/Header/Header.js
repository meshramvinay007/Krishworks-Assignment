import React from 'react';
import "./Header.css"

const Header = ({collaspe,setCollaspe}) => {

  const handleClick = () => {
    setCollaspe(false);
  }
  return (
    <div className="top">
    
    <div className="top-name">
    {collaspe &&<i className="fa-solid fa-bars" style={{color:"black"}} onClick={handleClick}></i>}
      <i className="fa-solid fa-user"></i>
      
      <h3>Diane Cooper</h3>
    </div>
    <div className="search">
      <input type="text" placeholder="Search" />
      <i className="fa-solid fa-plus" />
      <i className="fa-solid fa-bell" />
    </div>
  </div>
  )
}


export default Header;