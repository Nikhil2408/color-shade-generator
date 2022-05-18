import React from "react";

import styles from "../../styles/ColorPalleteList.module.css";
import ColorShade from "./ColorShade";

function ColorPalleteList(props){

    return (
        <div className={styles.ColorPalleteList}>
            {
                props.allColorShades.map((colorShade, index) => {
                    return <ColorShade key = {index} colorShade = {colorShade}/> 
                })
            } 
        </div>
    )
}

export default ColorPalleteList;