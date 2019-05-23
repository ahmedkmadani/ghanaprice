import React, { Component } from 'react'
// import './App/css'


export class PriceForm extends Component {

    constructor(props){
        super(props)
        this.state ={value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleCheck(event){
        alert("Item on check " + this.state.value);
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleCheck}>
                    <label>Price:
                    <input type="text" value={this.state.value} 
                    onChange ={this.handleChange}/>
                    </label>
                    {/* Implement React calender here */}
                    <input type="submit" value="Check"/>
                </form>
            </div>
        )
    }
}

export default PriceForm
