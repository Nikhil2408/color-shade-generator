import React, {useState} from "react";

import styles from "../../styles/ColorForm.module.css";

function ColorForm(props){

    const [colorInput, setColorInput] = useState("");

    function changeHandler(eventObj){
        setColorInput(eventObj.target.value);
    }

    function submitHandler(eventObj){
        eventObj.preventDefault();
        props.submitColor(colorInput);
    }

    return (
        <form className={styles.ColorForm} onSubmit={submitHandler}>
            <label htmlFor = "color">Color : </label>
            <input 
                type="text" 
                id="color" 
                name="color" 
                value = {colorInput} 
                onChange = {changeHandler}
                placeholder = "Type the color name or enter rgb/hex values" />
            <button>Generate Color Shades</button>
        </form>
    );
}

export default ColorForm;