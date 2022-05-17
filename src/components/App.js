import React, { useState } from "react";
import Values from "values.js";

import '../styles/App.css';
import ColorForm from "./ColorForm/ColorForm";
import ColorPalleteList from "./ColorPallete/ColorPalleteList";

function App() {

  const [allColorShades, setAllColorShades] = useState([]);
  
  function submitColor(colorInput){
    const color = new Values(`${colorInput}`);
    setAllColorShades(color.all(10));
  }

  return (
    <div className="App">
        <h1>Color Shades Generator</h1>
        <ColorForm submitColor = {submitColor}/>
        <ColorPalleteList allColorShades = {allColorShades}/>
    </div>
  );
}

export default App;
