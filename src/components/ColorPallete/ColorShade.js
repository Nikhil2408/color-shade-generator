import React, {useState} from "react";

import styles from "../../styles/ColorShade.module.css";
function ColorShade(props){

    const [clickStatus, setClickStatus] = useState(false);

    function copyToClipBoard(eventObj){
        const hexValue = eventObj.target.children[1].innerText;
        setClickStatus(true);
        setTimeout(() => {
            setClickStatus(false);
        }, 1000);
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(hexValue);
        return Promise.reject('The Clipboard API is not available.');
    }

    return (
        <div className={styles.colorShade} style = {{ 
            backgroundColor: `rgb(${props.colorShade.rgb[0]}, ${props.colorShade.rgb[1]}, ${props.colorShade.rgb[2]})`,
            color: props.colorShade.type === "tint" ? "black" : "white"
        }}
        onClick = {copyToClipBoard}>
            <p>{props.colorShade.weight}%</p>
            <p>{props.colorShade.hexString()}</p>
            {
                clickStatus ? <div className={styles.copiedMsg}>Copied!</div> : ""
            }
        </div>
    )
}

export default ColorShade;