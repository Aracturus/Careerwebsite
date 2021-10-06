import React from 'react'
import perspective from './Images/perspective.jpg'
import perspective2 from './Images/perspective2.jpg'

export default function Perspective() {
    return (
        <>
        <div class="container perspective-res columns">

            <div className="column">
                <h2>From their perspective.</h2>
                <p className="perspective-para">
                “Being here is a dream come true. I used to believe in doing good, but never went out there and did any volunteer work. Six months after joining Salesforce, I was already a Volunteer Rockstar and had volunteered more than 56 hours. Salesforce has motivated me to be this person, and now it's a part of me.”
                <br/>
                <span className="span-link"><b>YUKTI TULSYAN,<br/></b>

                 SENIOR PRODUCT MANAGER, HYDERABAD<br/><br />
                 <h4 >READ THE BLOG &gt;</h4>
                 </span>
                
                </p>
            </div>
            <div className="column">
                <img src={perspective} alt="" srcSet="" />
            </div>
            
        </div>
        <div className="container perspective-para columns">

            <div className="column">
                <img  className="perspective-para " src={perspective2} alt="" srcSet="" />
            </div>
            <div className="column">
                <p className="perspective-para">
                ““I really love the culture here. Trust is our number one value not only with our customers, but also with employees. I can be confident that every org and team has smart people with great ideas.”

                <br/>
                <span className="span-link"><b>KRANTHI KUMAR BADDEPOURI,<br/></b>

                
                    SOFTWARE ENGINEERING LMTS, HYDERABAD<br/><br />
                 <h4 >READ THE BLOG &gt;</h4>
                 </span>
                
                </p>
            </div>
           
            
        </div>
        </>
    )
}
