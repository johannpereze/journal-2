import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        ></input>
        <textarea
          placeholder="Whats hapened today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://image.freepik.com/free-vector/river-tree-night-landscape_104785-154.jpg"
            alt="note"
          ></img>
        </div>
      </div>
    </div>
  );
};
