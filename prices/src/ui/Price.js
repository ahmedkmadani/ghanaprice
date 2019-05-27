import React  from 'react'

const Price = props =>(
    <form onSubmit={props.getPrice}>
        <h1 className="title">Y-farm Pricing Model</h1>
        <div className="form-group">
            <label>Month :</label>
            <input className="month" name='month' type="text" placeholder="1"/>
            <label>Year :</label>
            <input className="year" name='year' type="text" placeholder="1970"/><br></br>
        
            <input type="submit" value="Check"/>
                   
        </div>
    </form>

)
export default Price