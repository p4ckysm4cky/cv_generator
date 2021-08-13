import React, {Component} from "react"
import "./preview.css"
import EduDisplay from "./EduDisplay"

class Preview extends Component {
    constructor(props) {
        super()
        this.state = props
    }

    render() {
        const eduSection = this.state.educationArray.map(education => <EduDisplay
        key={education.key}
        education={education}        
        />)

        return(
            <div className="mainContainer">
                <div className="page">
                    <div className="nameContainer">
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                        <div className="contact">
                            {this.state.phoneNumber?
                            <p>Phone Number : {this.state.phoneNumber}</p>
                            :<p></p>
                            }
                            {this.state.email?
                            <p>Email : {this.state.email}</p>
                            :<p></p>
                            }
                        </div>
                    </div>

                    <div className="workSection">
                        <h2>Education</h2>
                        <hr/>
                        {eduSection}
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview