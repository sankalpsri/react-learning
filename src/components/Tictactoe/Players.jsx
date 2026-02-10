import { useState } from "react";


const Players = ({ initialName, symbol, isActive, changePlayerName }) => {
  console.log(symbol + " is active: " + isActive);
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEdit() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      changePlayerName(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let buttonText = isEditing ? "Save" : "Edit";
  let editablePlayerName = <span className='player-name me-3 nav-item'>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} className="player-name me-3 nav-item" />;
  }
  return (
    <>
      <div className={isActive ? "col-6 active" : "col-6"}>
        <span className="player me-2">
          {editablePlayerName}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={handleEdit} className="btn btn-link link-warning">{buttonText}</button>
      </div>
    </>
  );
};

export default Players;
