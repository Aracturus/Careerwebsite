import React from 'react'
import bangalore from './Images/bangalore.png'
import delhi from './Images/delhi.png'
import gurgaon from './Images/gurgaon.png'
import hyderabad from './Images/hyderabad.png'
import mumbai from './Images/mumbai.png'

export default function Officelocation() {
    return (
    <>
        <div className="container">
            <h1>Office location in India.</h1>


                <div className="columns Officelocation ">
                    
                    <div className=" column   container">
                    <img className="image-size" src={bangalore} alt="" srcSet="" />

                    <h3 >Bengaluru</h3>
        
                    </div>  
                    <div className=" column   container">
                    <img className="image-size" src={gurgaon} alt="" srcSet="" />

                    <h3 >Gurgaon</h3>
        
                    </div>  
                    <div className=" column   container">
                    <img className="image-size" src={mumbai} alt="" srcSet="" />

                    <h3 >Mumbai</h3>
        
                    </div>  
                </div>
                <div className="columns Officelocation ">

                    <div className=" column   container">
                    <img className="image-size" src={delhi} alt="" srcSet="" />

                    <h3 >New Delhi</h3>
        
                    </div>  
                    <div className=" column   container">
                    <img className="image-size" src={hyderabad} alt="" srcSet="" />

                    <h3 >Hyderabad</h3>
        
                    </div>  <div className=" column   container"></div>  
                                    
                </div>



                
        </div>


            
     </>
    )
}
