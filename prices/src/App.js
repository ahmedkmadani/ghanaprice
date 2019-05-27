import React, { Component } from 'react'
import './App.css'

import Price from './ui/Price'
// import priceInfo from './ui/priceInfo';


export class App extends Component {

  state={
    month:undefined,
    year:undefined
  }

getPrice = async(e)=>{

  e.preventDefault()
    
    const month = e.target.elements.month.value
    const year = e.target.elements.year.value

  const apiCall = await fetch(`https://yfarmapi.herokuapp.com/price/v1?month=${month}&year=${year}`)
  const data = await apiCall.json()
  if(month && year){
    this.setState({
      month:data.month,
      year:data.year
    })
  
  }else{
    this.setState({
      month:'',
      year:''
    })
  }

}



  render() {
    return (
      <div>
        {/* <Price/> */}
          <Price getPrice = {this.getPrice} />   
          <priceInfo month= {this.state.month}
                     year = {this.state.year}/>
      </div>
    )

  }
}

export default App


