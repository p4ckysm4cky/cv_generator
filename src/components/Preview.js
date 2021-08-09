import React, {Component} from "react"


class Preview extends Component {
    constructor(props) {
        super()
        this.state = props
    }

    render() {
        return(
            <h1>{this.state.firstName} {this.state.lastName}</h1>
        )
    }
}

export default Preview