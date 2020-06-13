import React from 'react'
import Summary from './Summary';

function Total(props){
    
    return(
        <div className="summary__total__value">
            <Summary currency={props.currency} total={props.total}/>
            {props.currency.format(props.total)}
        </div>
    )
}
export default Total;