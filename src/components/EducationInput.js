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

                <label htmlFor="eduName">Education Name</label>
                <input 
                    name="eduName"
                    type="text" 
                />
                <label htmlFor="eduDuration">Duration</label>
                <input 
                    name="eduDuration"
                    type="text" 
                    placeholder="DDDD-DDDD"
                />
                <label htmlFor="eduDuration">Description</label>
                <textarea
                    name="eduDescription"
                    placeholder="Brief information on course, and grade achieved."
                />
            </div>
        )
    }
}

export default WorkInput