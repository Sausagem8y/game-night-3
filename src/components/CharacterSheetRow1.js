import { useState, useEffect } from "react";
import "./CharacterSheetRow1.css";
import ReadChar from "./ReadCharBtn";

function CharacterSheet() {
  const [title, setTitle] = useState("");
  const [_class, set_Class] = useState("");
  const [background, setBackground] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [faction, setFaction] = useState("");
  const [race, setRace] = useState("");
  const [alignment, setAlignment] = useState("");
  const [exp, setExp] = useState("");
  const [dci, setDCI] = useState("");
  const [strength, setStrength] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [proficiencyBonus, setProficiencybonus] = useState("");
  const [strCheck, setStrCheck] = useState("");
  const [dexCheck, setDexCheck] = useState("");
  const [consCheck, setConsCheck] = useState("");
  const [intCheck, setIntCheck] = useState("");
  const [wisCheck, setWisCheck] = useState("");
  const [chaCheck, setChaCheck] = useState("");
  const [acrobatics, setAcrobatics] = useState("");
  const [animalHusbandry, setAnimalHusbandry] = useState("");
  const [arcana, setArcana] = useState("");
  const [athletics, setAthletics] = useState("");
  const [deception, setDeception] = useState("");
  const [history, setHistory] = useState("");
  const [insight, setInsight] = useState("");
  const [intimidation, setIntimidation] = useState("");
  const [investigation, setInvestigation] = useState("");
  const [medicine, setMedicine] = useState("");
  const [nature, setNature] = useState("");
  const [perception, setPerception] = useState("");
  const [performance, setPerformance] = useState("");
  const [persuasion, setPersuasion] = useState("");
  const [religion, setReligion] = useState("");
  const [sleightOfHand, setSleightOfHand] = useState("");
  const [stealth, setStealth] = useState("");
  const [survival, setSurvival] = useState("");
  const [passiveWisdom, setPassiveWisdom] = useState("");
  const [otherProficiency, setOtherProficiency] = useState("");
  const [readInp, setReadInp] = useState("");
  const [updateInp, setUpdateInp] = useState("");
  const [updateOut, setUpdateOut] = useState("");
  const [updateOut2, setUpdateOut2] = useState("");
  const [deleteInp, setDeleteInp] = useState("");

  const Char = {
    title,
    _class,
    background,
    playerName,
    faction,
    race,
    alignment,
    exp,
    dci,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    inspiration,
    proficiencyBonus,
    strCheck,
    dexCheck,
    consCheck,
    intCheck,
    wisCheck,
    chaCheck,
    acrobatics,
    animalHusbandry,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    sleightOfHand,
    stealth,
    survival,
    passiveWisdom,
    otherProficiency,
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(Char);

    // const

    fetch("https://game-night3-default-rtdb.firebaseio.com/chars.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Char),
    }).then(() => {
      console.log("posted char");
    });
  };

  const readBtn = () => {
    // fetch("https://game-night3-default-rtdb.firebaseio.com/chars.json", {
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(Char),
    // });

    fetch(
      `https://game-night3-default-rtdb.firebaseio.com/chars/${readInp}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((data, req) => {
        console.log(data);

        // const charData = data;
        // const allChars = JSON.parse(charData);
        // charData.forEach((Char) => {
        // console.log(charData);
        // charData.find((req) => req === title);
      });
  };

  const CurrentChar = useEffect(() => {
    fetch("https://game-night3-default-rtdb.firebaseio.com/chars.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  const updateBtn = () => {
    // const updateOutNew = updateOut.value;
    // console.log(updateOutNew);
    fetch(
      `https://game-night3-default-rtdb.firebaseio.com/chars/${updateInp}.json`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ acrobatics: 17 }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const deleteBtn = () => {
    // const updateOutNew = updateOut.value;
    // console.log(updateOutNew);
    fetch(
      `https://game-night3-default-rtdb.firebaseio.com/chars/${deleteInp}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  // const ReadBtn = (props) => {
  //   console.log(props.data);
  // };

  return (
    <div className="sheet-div">
      <form onSubmit={submitHandle}>
        <button>Submit New Character!</button>
        <label className="name">
          Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <p>{title}</p>
        <div className="second-header">
          <label>
            Class:
            <input
              type="text"
              value={_class}
              onChange={(e) => set_Class(e.target.value)}
            />
          </label>
          <label>
            Background:
            <input
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            />
          </label>
          <label>
            Player Name:
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </label>
          <label>
            Faction:
            <input
              type="text"
              value={faction}
              onChange={(e) => setFaction(e.target.value)}
            />
          </label>
          <label>
            Race:
            <input
              type="text"
              value={race}
              onChange={(e) => setRace(e.target.value)}
            />
          </label>
          <label>
            Alignment:
            <input
              type="text"
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
            />
          </label>
          <label>
            Exp Points:
            <input
              type="text"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </label>
          <label>
            DCI Number:
            <input
              type="text"
              value={dci}
              onChange={(e) => setDCI(e.target.value)}
            />
          </label>
        </div>
        <div className="row-1-side-by-side">
          <div className="s-p-e-c-i-a-l">
            <label>
              STRENGTH
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={strength}
                  onChange={(e) => setStrength(e.target.value)}
                />
              </div>
            </label>
            <label>
              DEXTERITY
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={dexterity}
                  onChange={(e) => setDexterity(e.target.value)}
                />
              </div>
            </label>
            <label>
              CONSTITUTION
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={constitution}
                  onChange={(e) => setConstitution(e.target.value)}
                />
              </div>
            </label>
            <label>
              INTELLIGENCE
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={intelligence}
                  onChange={(e) => setIntelligence(e.target.value)}
                />
              </div>
            </label>
            <label>
              WISDOM
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={wisdom}
                  onChange={(e) => setWisdom(e.target.value)}
                />
              </div>
            </label>
            <label>
              CHARISMA
              <div>
                <input
                  className="special-boxes"
                  type="number"
                  value={charisma}
                  onChange={(e) => setCharisma(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="skills-and-throws">
            <div className="ins-pro">
              <label>
                INSPIRATION
                <input
                  className="better-boxes"
                  type="number"
                  value={inspiration}
                  onChange={(e) => setInspiration(e.target.value)}
                />
              </label>
            </div>
            <div className="ins-pro">
              <label>
                PROFICIENCY BONUS
                <input
                  className="better-boxes"
                  type="number"
                  value={proficiencyBonus}
                  onChange={(e) => setProficiencybonus(e.target.value)}
                />
              </label>
            </div>
            <div className="saving-throws">
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={strCheck}
                    onChange={(e) => setStrCheck(e.target.value)}
                  />
                  Strength
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value={dexCheck}
                    onChange={(e) => setDexCheck(e.target.value)}
                  />
                  <input className="better-boxes" type="number" />
                  Dexterity
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={consCheck}
                    onChange={(e) => setConsCheck(e.target.value)}
                  />
                  Constitution
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={intCheck}
                    onChange={(e) => setIntCheck(e.target.value)}
                  />
                  Intelligence
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={wisCheck}
                    onChange={(e) => setWisCheck(e.target.value)}
                  />
                  Wisdom
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={chaCheck}
                    onChange={(e) => setChaCheck(e.target.value)}
                  />
                  Charisma
                </label>
              </div>
            </div>
            <div className="skills">
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={acrobatics}
                    onChange={(e) => setAcrobatics(e.target.value)}
                  />
                  Acrobatics(Dex)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={animalHusbandry}
                    onChange={(e) => setAnimalHusbandry(e.target.value)}
                  />
                  Animal Handling(Wis)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={arcana}
                    onChange={(e) => setArcana(e.target.value)}
                  />
                  Arcana(Int)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={athletics}
                    onChange={(e) => setAthletics(e.target.value)}
                  />
                  Athletics(Str)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={deception}
                    onChange={(e) => setDeception(e.target.value)}
                  />
                  Deception(Cha)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={history}
                    onChange={(e) => setHistory(e.target.value)}
                  />
                  History(Int)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={insight}
                    onChange={(e) => setInsight(e.target.value)}
                  />
                  Insight(Wis)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={intimidation}
                    onChange={(e) => setIntimidation(e.target.value)}
                  />
                  Intimidation(Cha)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={investigation}
                    onChange={(e) => setInvestigation(e.target.value)}
                  />
                  Investigation(Int)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={medicine}
                    onChange={(e) => setMedicine(e.target.value)}
                  />
                  Medicine(Wis)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={nature}
                    onChange={(e) => setNature(e.target.value)}
                  />
                  Nature(Int)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={perception}
                    onChange={(e) => setPerception(e.target.value)}
                  />
                  Perception(Wis)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={performance}
                    onChange={(e) => setPerformance(e.target.value)}
                  />
                  Performance(Cha)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={persuasion}
                    onChange={(e) => setPersuasion(e.target.value)}
                  />
                  Persuasion(Cha)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                  />
                  Religion(Int)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={sleightOfHand}
                    onChange={(e) => setSleightOfHand(e.target.value)}
                  />
                  Sleight of Hand(Dex)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={stealth}
                    onChange={(e) => setStealth(e.target.value)}
                  />
                  Stealth(Dex)
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  <input
                    className="better-boxes"
                    type="number"
                    value={survival}
                    onChange={(e) => setSurvival(e.target.value)}
                  />
                  Survival(Wis)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="the-border">
          <label>
            <input
              type="number"
              value={passiveWisdom}
              onChange={(e) => setPassiveWisdom(e.target.value)}
            />
            Passive Wisdom(Perception)
          </label>
        </div>
      </form>
      <div className="the-border">
        <div className="others-and-languages">
          <label>
            <input
              type="text"
              value={otherProficiency}
              onChange={(e) => setOtherProficiency(e.target.value)}
            />
            OTHER PROFICIENCIES AND LANGUAGES
          </label>
        </div>
      </div>
      <input
        type="text"
        value={readInp}
        placeholder="Copy and paste char ID from console here."
        onChange={(e) => setReadInp(e.target.value)}
      />
      <button onClick={readBtn}>click to read</button>
      <div>
        <input
          type="text"
          value={updateInp}
          placeholder="Copy and paste char ID from console here."
          onChange={(e) => setUpdateInp(e.target.value)}
        />
        <input
          type="text"
          value={updateOut}
          placeholder="not currently working"
          onChange={(e) => setUpdateOut(e.target.value)}
        />
        <input
          type="text"
          value={updateOut2}
          placeholder="not currently working"
          onChange={(e) => setUpdateOut2(e.target.value)}
        />
        <button onClick={updateBtn}>click to patch</button>
      </div>
      <div>
        <input
          type="text"
          value={deleteInp}
          placeholder="place the ID of the character you wish to delete here"
          onChange={(e) => setDeleteInp(e.target.value)}
        />
        <button onClick={deleteBtn}>DELETE CHARACTER</button>
      </div>
    </div>
  );
}

// const CurrentChar = useEffect(() => {
//   fetch("https://game-night3-default-rtdb.firebaseio.com/chars.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((char) => {
//         console.log(char.title)
//       })
//     });
// }, []);

// const listNotes = () => {
//   const notes = loadNotes();

//   notes.forEach((note) => {
//     console.log(chalk.blueBright(note.title));
//   });
// };

// const listAllNotes = () => {
//   const notes = loadNotes();

//   notes.forEach((note) => {
//     console.log(chalk.blueBright(note.title));
//     console.log(chalk.hex("#deaded")(note.body));
//   });
// };

// const readNote = (title) => {
//   const notes = loadNotes();
//   const check = notes.find((note) => note.title === title);

//   if (check) {
//     console.log(chalk.blueBright(check.title));
//     console.log(chalk.hex("#deaded")(check.body));
//   } else {
//     console.log(chalk.red.inverse("Note Not Found!"));
//   }
// };

export default CharacterSheet;
