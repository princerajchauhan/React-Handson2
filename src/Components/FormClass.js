import React, { Component } from "react";
import './FormClass.css'

class FormClass extends Component {

    state = {
        Name: '',
        Dept: '',
        Rat: '',
        EmpData: []
    }

    clickHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(event.target.name, event.target.valuet)
    }

    clickHandler = (event) => {
        event.preventDefault()
        const newOnj = {
            Name: this.state.Name,
            Dept: this.state.Dept,
            Rat: this.state.Rat
        }

        this.state.EmpData.push(newOnj)
        this.setState({ EmpData: this.state.EmpData, Name: '', Dept: '', Rat: '' })
        console.log(this.state.EmpData)
    }

    render() {
        return (
            <div style={{ textAlign: "center", paddingTop:"30px" }}>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form>

                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" name="Name" value={this.state.Name} onChange={this.clickHandle} required />
                    <br /><br />

                    <label htmlFor="dept">Department : </label>
                    <input type="text" id="dept" name="Dept" value={this.state.Dept} onChange={this.clickHandle} required />
                    <br /><br />

                    <label htmlFor="rat">Rating : </label>
                    <input type="number" id="rat" name="Rat" value={this.state.Rat} onChange={this.clickHandle} required />
                    <br /><br />

                    <button type="submit" onClick={this.clickHandler}>Submit</button>
                </form>

                <div id="Element">
                    {
                        this.state.EmpData.map((element, index) => {
                            return (
                                <div key={index} id="elementData">
                                    Name : {element.Name} | Department : {element.Dept} | Rating : {element.Rat}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default FormClass