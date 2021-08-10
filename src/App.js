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
        lastName : "Last Name",
        phoneNumber: "",
        email: "",
        educationArray: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addEducation = this.addEducation.bind(this)
    this.modifyEducation = this.modifyEducation.bind(this)
  }

  generateUniqueID() {
    return Math.floor(Math.random() * Date.now())
  }



  // Used for dealing with input boxes
  handleChange(e) {    
    console.log(this.state) // remove this when finished
    this.setState({
        [e.target.name]: e.target.value
    })
  }



  // Method for adding education to the educationArray
  addEducation() {
    console.log(this.state.educationArray)
    // strat I found to clone an array
    const tempArray = this.state.educationArray.map(x => x)
    tempArray.push({
        key: this.generateUniqueID(),
        eduName:"",
        eduDuration:"",
        eduDescription:""    
    })
    this.setState({
      educationArray: tempArray
    })
  }

  // Modify an array of objects from child :)
  modifyEducation(id, newEducation) {
    const tempArray = this.state.educationArray.map((x) => x)
    const idIndex = tempArray.find(x => x.key === id)
    tempArray[idIndex] = newEducation
    this.setState({
      educationArray: tempArray
    })

  }

  
  render() {
    return(
      <Router>
        <div>
          <Link to="/"> Modify </Link>
          <Link to="/preview"> Preview </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <EditForm 
              handleChange={this.handleChange} 
              state={this.state}
              addEducation={this.addEducation}
              modifyEducation={this.modifyEducation}
            />
          </Route>
          <Route exact path="/preview">
            <Preview {...this.state}/>
          </Route>
        </Switch>
      </Router>
  )}
}
export default App;
