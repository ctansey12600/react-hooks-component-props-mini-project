import React from "react";

function Minutes({minutes}){
    let emoji = ""
    if(minutes < 30){
        const time = Math.round(minutes/5)
        for(let i = 0; i < time;i++){
            emoji += "☕️"
        }
    }else {
        const time = Math.round(minutes/10)
        for(let i = 0; i < time;i++){
            emoji += "🍱"
        }
    }
    return (
        <small>
            {emoji}
        </small>
    )
}

export default Minutes