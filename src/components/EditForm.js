import React, { Component } from "react"


class EditForm extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = props.handleChange
    }

    
    
    render() {
        return(
            <div className="structure">
                <input 
                className="textEdit" 
                type="text" 
                value={this.props.state.firstName} 
                onChange={this.handleChange}
                name="firstName"
                placeholder="First Name"
                />

                <input 
                className="textEdit" 
                type="text" 
                value={this.props.state.lastName} 
                onChange={this.handleChange}
                name="lastName"
                placeholder="Last Name"
                />
            </div>
        )
    }
    
}

export default EditForm