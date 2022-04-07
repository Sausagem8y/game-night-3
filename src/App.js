// import { Express } from "express";
import "./App.css";
import CharacterSheet from "./components/CharacterSheetRow1";
import CharacterSheet2 from "./components/CharacterSheetRow2";
import CharacterSheet3 from "./components/CharacterSheetRow3";
// const Char = require("./components/Char");
// import router from "./components/Char";

// const express = require("express");
// const thing = Express();

// // Define routes here ...

// thing.listen(3000, function () {
//   console.log("server is running on port 3000");
// });

function App() {
  return (
    <div className="App">
      <CharacterSheet />
      <CharacterSheet2 />
      <CharacterSheet3 />
    </div>
  );
}

export default App;
