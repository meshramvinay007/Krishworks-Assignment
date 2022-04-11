import React, { memo } from 'react';
import "./Files.css"

const Files = memo(() => {
  return (
    <div className="add-note">
    <div className="add-note-head">
      <h6>Files /Documents</h6>
      <p className="blue">
        {" "}
        <i className="fa-solid fa-file-circle-plus"></i> Add Files
      </p>
    </div>
    <div className="list-notes">
      <div className="single-note">
        <h6>
          {" "}
          <i className="fa-solid fa-file-lines"></i> Check Up
          Result.pdf
        </h6>{" "}
        <p>123kb</p>
      </div>
      <div className="single-note">
        <h6>
          {" "}
          <i className="fa-solid fa-file-lines"></i> Check Up
          Result.pdf
        </h6>{" "}
        <p>
          <i
            className="fa-solid fa-trash-can"
            style={{ marginRight: "10px" }}
          ></i>
          <i className="fa-solid fa-circle-arrow-down"></i>
        </p>
      </div>
    </div>
  </div>
  )
})

export default Files