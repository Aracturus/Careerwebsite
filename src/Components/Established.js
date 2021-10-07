import React from 'react'
import equality from "./Images/equality.png"

export default function Established() {
    return (
        <>
        <div className="container ">
            <div className="container columns">
                <div className="equity1 column">
                    <img src={equality} alt="" srcSet="" /><br />
                    <span>
                    Biggest Teams Represented:<br/>
                    Business Technology,<br/>Technology and Product, Sales
                    </span>
                </div>
                <div className="equity2 column">
                   <h1 style={{color:'white'}}>3110</h1>
                   <span>Salesforce employees in India</span>
                </div>
                <div className="equity3 column">
                <h1 style={{color:'white'}}>2005</h1>
                   <span>Salesforce India established</span>
                </div>
                
            </div>
        </div>

            
        </>
    )
}
