import React, { memo, useEffect, useState } from 'react';
import "./Appointment.css"

const Appointment = memo(() => {
    const [data,setData] = useState({});
     
    useEffect(() => {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details').then(res => res.json().then(data => setData(data[0]['Upcoming Appointments']))).catch(err => console.log(err));
    }, [])

    console.log(data);
  return (
    <div className="appointment">
              <div>
                <div className="appoint-top">
                  <div className="grey active">Upcomming Appointments</div>
                  <div className="grey">Past Appointments</div>
                  <div className="grey">Medical Records</div>
                </div>
                <div className="appoint-low">
                  <div className="treatment-section">
                    <p>Root Canal Treatment</p>
                    <button>
                      <i className="fa-solid fa-angle-up"></i> Show Previous
                      Treatment
                    </button>
                  </div>
                  <div className="appoint-detail">
                    <div className="detail-sec">
                      <div className="date">
                        <h3>{data.Date}</h3>
                        <p>{data.Time}</p>
                      </div>
                      <div className="treatment">
                        <div>
                          <p>Treatment</p>
                          <h5>{data.Treatment}</h5>
                        </div>
                      </div>
                      <div className="doc-info">
                        <div className="doc">
                          <p>Dentist</p>
                          <h5>{data.Dentist}</h5>
                        </div>
                        <div className="nurse">
                          <p>Nurse</p>
                          <h5>{data.Nurse}</h5>
                        </div>
                        <div className="note">
                          <i className="fa-solid fa-clipboard"></i>
                          <p>Note</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
})

export default Appointment