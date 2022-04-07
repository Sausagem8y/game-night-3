import React from "react";
import "./CharacterSheetRow3.css";

const CharacterSheetRow3 = () => {
  return (
    <div>
      <form action="/chars">
        <div className="large-square">
          <div>
            <input type="text" />
            <label>PERSONALITY</label>
          </div>
          <div>
            <input type="text" />
            <label>IDEALS</label>
          </div>
          <div>
            <input type="text" />
            <label>BONDS</label>
          </div>
          <div>
            <input type="text" />
            <label>FLAWS</label>
          </div>
        </div>
        <div className="the-border">
          <div className="extra-large-square">
            <input className="big-boy" type="text" />
            <label>FEATURES AND TRAITS</label>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CharacterSheetRow3;
