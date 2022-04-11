import React, { memo } from 'react';
import "./Print.css"

const Print = memo(() => {
  return (
    <div className="top-2">
    <div className="list">
      <p className="blue">Patient List</p>
      <i className="fa-solid fa-chevron-right"></i>
      <p className="grey">Diane Cooper</p>
    </div>
    <div className="print">
      <button className="grey">
        <i className="fa-solid fa-print"></i>
      </button>
      <button className="grey">
        <i className="fa-solid fa-pen-to-square"></i>Edit Patient
      </button>
    </div>
  </div>
  )
})

export default Print