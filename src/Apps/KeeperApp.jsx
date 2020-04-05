import React, { useState, Fragment } from "react";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import PetsIcon from "@material-ui/icons/Pets";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(newNote) {
    setNotesArray((prevNotesArray) => {
      return [...prevNotesArray, newNote];
    });
  }

  function deleteNote(id) {
    setNotesArray((prevNotesArray) => {
      return prevNotesArray.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function RenderNotes() {
    notesArray.map((noteItem, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      );
    });
  }

  return (
    <Fragment>
      <header>
        <h1>
          <PetsIcon /> Keeper
        </h1>
      </header>
      <CreateArea onAdd={addNote} />
      {notesArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </Fragment>
  );
}

export default App;
