import "./CharacterSheetRow2.css";

function CharacterSheet2() {
  return (
    <div>
      <form>
        <div className="row-2">
          <div className="smaller-icons-group">
            <input className="smaller-icons" type="text" />
            <label>ARMOR CLASS</label>
            <input className="smaller-icons" type="number" />
            <label>INITIATIVE</label>
            <input className="smaller-icons" type="number" />
            <label>SPEED</label>
          </div>
          <div className="wide-rectangles">
            <input className="better-boxes" type="number" />
            <label>CURRENT HIT POINTS</label>
          </div>
          <div className="wide-rectangles">
            <input className="better-boxes" type="number" />
            <label>TEMPORARY HIT POINTS</label>
          </div>
          <div className="small-rectangles">
            <div className="the-border">
              <input className="better-boxes" type="text" />
              <label>HIT DICE</label>
            </div>
          </div>
          <div className="small-rectangles">
            <div className="checks">
              <div>
                <label className="minor-text">successes</label>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
              <div>
                <label className="minor-text">failures</label>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
              <label className="minor-text">DEATH SAVES</label>
            </div>
          </div>
          <div className="large-square">
            <div>
              <label className="minor-text">NAME/</label>
              <label className="minor-text">ATK BONUS/</label>
              <label className="minor-text">DAMAGE/TYPE</label>
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <div className="name-atk-dmg">
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
              <input className="smaller-inputs" type="text" />
            </div>
            <label>ATTACKS AND SPELLCASTING</label>
          </div>
          <div className="large-square">
            <input className="big-boy" type="text" />
            <label>EQUIPMENT</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CharacterSheet2;
