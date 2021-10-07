import React from 'react'
// import award from './Images/award.jpg'
import award2 from './Images/award2.png'
import award3 from './Images/award3.png'

export default function Award() {
    return (
        <>
        <div className="container perspective-para columns">
            <div className="column">
                <img src={award2} alt="" srcset="" />
            </div>
            <div className="column">
                <img src={award2} alt="" srcset="" />
            </div>
            <div className="column">
                <img src={award3} alt="" srcset="" />
            </div>
            
        </div>
            
        </>
    )
}
