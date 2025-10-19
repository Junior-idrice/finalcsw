import React from "react";

const Filter = ({ handleFilterText }) => {
  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <select
          className="form-select"
          aria-label="Filter notes"
          style={{ height: "50px" }}
          onChange={(e) => handleFilterText(e.target.value)}
        >
          <option value="">Filter Notes</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
