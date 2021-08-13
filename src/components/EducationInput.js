import React, { Component } from "react"


class WorkInput extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = props.handleChange
        this.modifyEducation = props.modifyEducation
        this.delEducation = props.delEducation
        this.handleList = this.handleList.bind(this)
    }
    
    // This is used to modify the educationArray when there are changes being made to the input box
    handleList(e) {
        console.log(this.props.education)
        const educationCopy = this.props.education
        educationCopy[e.target.name] = e.target.value
        this.modifyEducation(educationCopy)
    }


    render() {
        console.log(this.props)
        return (
            <div className="eduInput">

                <label htmlFor="eduName">Education Name</label>
                <input 
                    name="eduName"
                    type="text"
                    value={this.props.education.eduName}
                    onChange={this.handleList}
                />
                <label htmlFor="eduDuration">Duration</label>
                <input 
                    name="eduDuration"
                    type="text" 
                    placeholder="DDDD-DDDD"
                    value={this.props.education.eduDuration}
                    onChange={this.handleList}
                />
                <label htmlFor="eduDuration">Description</label>
                <textarea
                    name="eduDescription"
                    placeholder="Brief information on course, and grade achieved."
                    value={this.props.education.eduDescription}
                    onChange={this.handleList}
                />
                <button onClick={() => {this.delEducation(this.props.education.key)}}>Remove Education</button>
            </div>
        )
    }
}

export default WorkInput