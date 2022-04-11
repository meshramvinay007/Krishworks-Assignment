import React, { memo, useEffect, useState } from 'react';
import "./Profile.css"

const Profile = memo(() => {
    const [data,setData] = useState({});
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails").then(res => res.json()).then(data => setData(data[0])).catch(err => console.log(err))
    },[])

    console.log(data);

  return (
    <div className="info">
    <div className="profile">
      <img src="https://w7.pngwing.com/pngs/427/187/png-transparent-monkey-d-luffy-nami-one-piece-donquixote-doflamingo-portgas-d-ace-one-piece-child-face-hand.png" />
      <h3 className="name">{data.name}</h3>
      <p className="email grey">{data['e-email']}</p>
      <div className="past-up">
        <div className="past">
          <h4>{data.Past}</h4>
          <p className="grey">Past</p>
        </div>
        <div className="up">
          <h4>{data.Upcoming}</h4>
          <p className="grey">Upcomming</p>
        </div>
      </div>
      <button>
        <b>Send Message</b>
      </button>
    </div>
    <div className="basic-info">
    
      <div>
        <p>Gender</p>
        <p>{data.Gender}</p>
      </div>
      <div>
        <p>Birthday</p>
        <p>{data.Birthday}</p>
      </div>
      <div>
        <p>Member Status</p>
        <p>{data['Member Status']}</p>
      </div>
      <div>
        <p>Phone Number</p>
        <p>{data['Phone Number']}</p>
      </div>
      <div>
        <p>Register Date</p>
        <p>{data['Register Date']}</p>
      </div>
      <div>
        <p>Street Address</p>
        <p>{data['Street Address']}</p>
      </div>
      <div>
        <p>ZIP Code</p>
        <p>{data['ZIP Code']}</p>
      </div>
    </div>
  </div>
  )
})

export default Profile;