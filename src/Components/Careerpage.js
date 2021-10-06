import React from 'react'
import firstone from './Images/firstone.png'


export default function Careerpage() {
    

    return (
        <>
            <div className="columns">
                
                <div className="column  container">
                 
                    <h1 style={{marginTop:'100px'}}>Salesforce <br/>in India.    <br/>         
                    <button className="button is-success is-hovered" style={{margin:'10px'}}>SEARCH JOBS</button> </h1>


                </div>
                <div className="column  container">
                    <img src={firstone} alt="" srcSet="" />
                 



                </div>
                
            </div>
            
        </>
    )
}
