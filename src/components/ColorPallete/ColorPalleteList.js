import React from "react";

import styles from "../../styles/ColorPalleteList.module.css";

function ColorPalleteList(props){

    function clickHandler(eventObj){

    }

    return (
        <div className={styles.ColorPalleteList}>
            {
                props.allColorShades.map(colorShade => {
                    return <div className={styles.colorShade} style = {{ 
                        backgroundColor: `rgb(${colorShade.rgb[0]}, ${colorShade.rgb[1]}, ${colorShade.rgb[2]})`,
                        color: colorShade.type === "tint" ? "black" : "white"
                    }}
                    onClick = {clickHandler}>
                        <p>{colorShade.weight}%</p>
                        <p>{colorShade.hexString()}</p>
                    </div>
                })
            } 
        </div>
    )
}

export default ColorPalleteList;