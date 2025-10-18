import React from 'react'
import Filter from '../components/Filter'
import NoteCardContainer from '../components/NoteCardContainer'

const HomePage = ({ notes, loading, handleFilterText, resetFilter }) => {
  return (
    <>
      <Filter handleFilterText={handleFilterText} />

      {notes.length < 1 ? (
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
      ) : null}

      <NoteCardContainer notes={notes} loading={loading} />
    </>
  )
}

export default HomePage
