import React, { memo } from 'react';
import "./Notes.css"

const Notes = memo(() => {
  return (
    <div className="notes">
    <div className="notes-top">
      <h5>Notes</h5>
      <p className="blue">See all</p>
    </div>
    <div className="notes-mid">
      <ul>
        <li>- This is lorem ipsum</li>
        <li>- This is lorem ipsum</li>
        <li>- This is lorem ipsum</li>
      </ul>
      <div style={{ textAlign: "right" }}>
        <button>Save Notes</button>
      </div>
    </div>
    <p style={{ padding: "2% 0 2% 8%" }}>Lorem Ipsum</p>
    <div className="notes-bottom">
      <h6>
        <i className="fa-solid fa-user blue"></i> Drg. Megha Nanade
      </h6>
      <p>20 Nov '19</p>
    </div>
  </div>
  )
})

export default Notes