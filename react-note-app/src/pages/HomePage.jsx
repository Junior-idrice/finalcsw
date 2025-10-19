import React, { useState } from 'react';
import Filter from '../components/Filter';
import NoteCardContainer from '../components/NoteCardContainer';

const HomePage = ({ notes, loading }) => {
  const [filterValue, setFilterValue] = useState("ALL"); 

  const handleFilterText = (value) => {
    setFilterValue(value);
  };
  const filteredNotes =
    filterValue === "ALL"
      ? notes
      : notes.filter((note) => note.category === filterValue);
  const resetFilter = () => {
    setFilterValue("ALL");
  };

  return (
    <>
      <Filter filterValue={filterValue} handleFilterText={handleFilterText} />
      {filteredNotes.length < 1 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h4>No NoteBook available</h4>
          <button
            onClick={resetFilter}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Show All Notes
          </button>
        </div>
      )}

      <NoteCardContainer notes={filteredNotes} loading={loading} />
    </>
  );
};

export default HomePage;
