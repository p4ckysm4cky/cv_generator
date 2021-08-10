import React from "react"
import "./preview.css"

function EduDisplay(props) {
    return(
        <div className="eduDisplay">
            <div className="eduDisplayTop">
                <h3>{props.education.eduName}</h3>
                <p className="date">{props.education.eduDuration}</p>
                
            </div>
            <p>{props.education.eduDescription}</p>
        </div>
    )
}

export default EduDisplay