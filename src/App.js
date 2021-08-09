import React, { Component } from "react"
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import EditForm from "./components/EditForm"
import Preview from "./components/Preview"
import "./App.css"

class App extends Component{
  constructor() {
    super()
    this.state = {
        firstName: "First Name",
        lastName : "Last Name"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    console.log(this.state)
    this.setState({
        [e.target.name]: e.target.value
    })
}
  
  render() {
    return(
      <Router>
        <div>
          <Link to="/">Modify</Link>
          <Link to="/preview">Preview</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <EditForm handleChange={this.handleChange} state={this.state}/>
          </Route>
          <Route exact path="/preview">
            <Preview {...this.state}/>
          </Route>
        </Switch>
      </Router>
  )}
}
export default App;
