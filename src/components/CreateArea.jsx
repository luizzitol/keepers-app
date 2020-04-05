import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      submitNote(event);
    }
  }

  return (
    <div onKeyDown={handleEnter}>
      <form className="create-note">
        {isClicked && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          onClick={() => {
            setClicked(true);
          }}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon style={{ fontSize: 30 }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
