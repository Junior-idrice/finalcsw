import React from "react";

const Filter = ({ filterValue, handleFilterText }) => {
  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <select
          className="form-select"
          value={filterValue}
          onChange={(e) => handleFilterText(e.target.value)}
          style={{ height: "50px", borderRadius: "8px", fontSize: "1rem" }}
        >
          <option value="ALL">All NoteBook</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
