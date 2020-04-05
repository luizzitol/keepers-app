import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <DeleteIcon style={{ fontSize: 25 }} />
        </button>
      </div>
    </Zoom>
  );
}

export default Note;
