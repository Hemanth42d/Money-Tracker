import { useState } from "react";

const InputSection = () => {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  const addNewTransation = (e) => {
    e.preventDefault();
  };

  return (
    <div className="inputSec">
      <div className="moneyShowCase">
        <p>
          $400<span>.00</span>
        </p>
      </div>
      <form className="formSec" onSubmit={(e) => addNewTransation(e)}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="+200 new samsung tv"
          />
          <input
            type="date"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <center>
          <button className="submitBtn" type="submit">
            Add new transcation
          </button>
        </center>
      </form>
    </div>
  );
};

export default InputSection;
