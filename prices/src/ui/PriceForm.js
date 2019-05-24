import React, { Component } from 'react' 
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'


// import 'bootstrap/dist/css/bootstrap.css';

// import './App.css'

  
export class PriceForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            value: '',
            startDate: new Date(),
            amount:'select',
            produce:'select'
                    }

        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
        this.handleProduce = this.handleProduce.bind(this)

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
    }
    handleAmount(event){
        this.setState({amount: event.target.value})
    }
    handleProduce(event){
        this.setState({produce: event.target.value})
    }
    render() {
        return (
            <div className="container">
                <form className="formPrice" onSubmit = {this.handleCheck}>
                   <h1 className="title">Y-farm Pricing Model</h1>
                    {/* Implement React calender here */}
                    {/* <Form.Row> */}
                   <label className="date"> Date:<br/></label>
                   
                    <DatePicker
                        selected={this.state.startDate}
                        onChange = {this.handleDate}
                        // placeholderText="Select a date" 
                        />
                    {/* </Form.Row> */}

                    {/* Price dropdown */}
                    <label>Amount:
                    <select amount={this.state.value} onChange={this.handleAmount}>
                        <option>50</option>
                        <option>100</option>
                        <option>250</option>
                    </select>
                    </label>
                    <label>Produce<eventbr/>
                    <select produce={this.state.value} onChange={this.handleProduce}>
                        <option>Yams</option>
                        <option>Cassava</option>
                        <option>Potatoes</option>
                    </select>
                    </label>
                    <input type="submit" value="Check"/>
                    <label>Price:
                    <input type="text" value={this.state.value} 
                    onChange ={this.handleChange}/>
                    </label>
                </form>
            </div>
        )
    }
}

export default PriceForm
