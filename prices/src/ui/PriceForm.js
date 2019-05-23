import React, { Component } from 'react' 
import DatePicker from 'react-datepicker'
import Dropdown from 'react-dropdown'
import "react-datepicker/dist/react-datepicker.css"
// import './App/css'


export class PriceForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            value: '',
            startDate: new Date()
            }

        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleDate = this.handleDate.bind(this)

    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleCheck(event){
        alert("Item on check " + this.state.value + ' ' + this.state.startDate);
        event.preventDefault()
    }

    handleDate(date){
        this.setState({
            startDate:date
        })
        const options = [
            'One', 'Two', 'Three'
        ]
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
                    <DatePicker
                        selected={this.state.startDate}
                        onChange = {this.handleDate}
                        // placeholderText="Select a date"
                    />

                    <DatePicker
                        selected={this.state.startDate}
                        onChange = {this.handleDate}
                        // placeholderText="Select a date"
                    />

                    <Dropdown options={options}
                        onChange={this._onSelect}
                        value={defaultOption}
                        placeholder="Select Price"
                    />
                    {/* <input type="submit" value="Check"/> */}
                </form>
            </div>
        )
    }
}

export default PriceForm
