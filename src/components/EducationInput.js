import React, { Component } from "react"


class WorkInput extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = props.handleChange
    }

    render() {
        return (
            <div className="eduInput">

                <label for="eduName">Education Name</label>
                <input 
                    name="eduName"
                    type="text" 
                />
                <label for="eduDuration">Duration</label>
                <input 
                    name="eduDuration"
                    type="text" 
                    placeholder="DDDD-DDDD"
                />
                <label for="eduDuration">Duration</label>
                <textarea
                    name="eduDuration"
                    placeholder="Brief information on course, and grade achieved."
                />
            </div>
        )
    }
}

export default WorkInput