import React from "react";
import NoteCard from "./NoteCard";
import Loader from "./Loader";

const NoteCardContainer = ({ notes, loading }) => {
  return (
    <div className="container">
      <div
        className="note-has-grid row justify-content-center g-4"
        style={{ margin: "0 auto" }}
      >
        {loading && <Loader loading={loading} />}

        {notes.map((note) => (
          <div
            key={note.id}
            className="col-12 col-sm-10 col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <div className="single-note-item note-card-wrapper w-100">
              <NoteCard note={note} />
            </div>
          </div>
        ))}
      </div>

    
      <style>
        {`
          @media (max-width: 576px) {
            .note-has-grid {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .note-card-wrapper {
              width: 90% !important;
              max-width: 420px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NoteCardContainer;
