import { useEffect, useState } from "react";
import "./Navbar.css"

const Navbar = ({collaspe,setCollaspe}) => {
    const [data,setData] = useState({});

    useEffect(()=>{
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails').then(res => res.json().then(data => setData(data[0]))).catch(err => console.log(err));
    }, [])

    console.log(data);
    const handleClick = () => {
        setCollaspe(true);
    }

    return <section className="navbarr" style={{left:collaspe ?"-250px" :"0"}}>
    <div className="nav-top">
      <i className="fa-solid fa-hourglass blue"></i>
      <div>
        <h5>
          <b>Zendenta</b>
        </h5>
        <p>Cabut gigi tanpa sakit</p>
      </div>
      <i className="fa-solid fa-bars"   onClick={handleClick} ></i>
    </div>
    <ul className="side-nav">
      <li>
        <h6>
          <i className="fa-solid fa-circle-question"></i> Overview
        </h6>
      </li>
      <li>
        <h6>
          <i className="fa-solid fa-circle-question"></i> Calander
        </h6>
      </li>
      <li className="activee">
        <h6>
          <i className="fa-solid fa-circle-question"></i> Patient List
        </h6>
      </li>
      <li>
        <h6>
          <i className="fa-solid fa-circle-question"></i> Message
        </h6>
      </li>
      <li>
        <h6>
          <i className="fa-solid fa-circle-question"></i> Payment Information
        </h6>
      </li>
    </ul>
    <div className="Doc">
      <div className="dentist-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW2Tgw3f5Z7jd6j2JXnXNB_tYhUOl2X7VLg&usqp=CAU" alt="" />
      </div>
      <div>
        <h6>{data.name}</h6>
        <p>{data.specification}</p>
      </div>
      <i className="fa-solid fa-angle-down"></i>
    </div>
  </section>
    
}

export default Navbar;