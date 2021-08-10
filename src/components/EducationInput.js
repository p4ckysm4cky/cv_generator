import React, { Component } from "react"


class WorkInput extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = props.handleChange
        this.modifyEducation = props.modifyEducation
        this.handleList = this.handleList.bind(this)
    }
    handleList(e) {
        const id = this.props.education.key
        console.log(this.props.education)
        const educationCopy = this.props.education
        educationCopy[e.target.name] = e.target.value
        this.modifyEducation(id, educationCopy)
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
                />
                <label htmlFor="eduDuration">Description</label>
                <textarea
                    name="eduDescription"
                    placeholder="Brief information on course, and grade achieved."
                    value={this.props.education.eduDescription}
                />
            </div>
        )
    }
}

export default WorkInput