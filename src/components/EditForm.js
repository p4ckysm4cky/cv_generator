import React, { Component } from "react"
import EducationInput from "./EducationInput"


class EditForm extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = props.handleChange
        this.addEducation = props.addEducation
    }

    
    
    render() {
        const eduContainer = this.props.state.educationArray.map(education => <EducationInput/>)

        return(
            <div className="structure">
                <input 
                    name="firstName"
                    className="textEdit" 
                    type="text" 
                    value={this.props.state.firstName} 
                    onChange={this.handleChange}
                    placeholder="First Name"
                />

                <input 
                    name="lastName"
                    className="textEdit" 
                    type="text" 
                    value={this.props.state.lastName} 
                    onChange={this.handleChange}
                    placeholder="Last Name"
                />

                <input 
                    name="phoneNumber"
                    type="number"
                    className="textEdit"
                    value={this.props.state.phoneNumber}
                    placeholder="Phone number"
                    onChange={this.handleChange}
                />

                <input 
                    name="email"
                    type="text"
                    className="textEdit"
                    value={this.props.state.email}
                    placeholder="email@example.com"
                    onChange={this.handleChange}
                />
                
                <button onClick={() => this.addEducation()}>Add Education</button>

                {eduContainer}



            </div>
        )
    }
    
}

export default EditForm