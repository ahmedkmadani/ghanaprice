import React, { Component } from 'react'

const priceInfo = props => (
    <div className='price_info'>
        {
            props.month && <p>Month:
                {props.month}
            </p>
           }
           {
            props.year && <p>Year:
                {props.year}
            </p>
            
        }
    </div>
)

export default priceInfo
