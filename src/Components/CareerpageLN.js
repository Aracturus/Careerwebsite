import React from 'react'
import LN1 from './Images/LN1.jpg';
import LN2 from './Images/LN2.jpg';
import LN3 from './Images/LN3.jpg';

export default function CareerpageLN() {
    return (
        <>

<div className="container">
                    <h1>The Latest News from India.</h1>

            

                    <div className="columns">
                        {/* one of three */}
                        
                        <div className="column  container">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={LN1} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">Fireside Chat with Arundhati Bhattacharya,Chairperson and CEO,Salesforce India </p>
                                            </div>
                                        </div>

                                        
                                        {/* <h4>LEARN MORE &gt;</h4> */}
                                    </div>
                                </div>
                        </div>
                        {/* two of three */}
                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={LN2} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">The Time for Business to Be Platform for Change in NOW</p>
                                            </div>
                                        </div>

                                       
                                        {/* <h4>LEARN MORE &gt;</h4> */}
                                    </div>
                                </div>
                        
                        </div>
                        {/* three of three */}

                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={LN3} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">Salesforce India:Taking Care of One Another Durin Unimaginable Crisis</p>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                        
                        </div>
                    </div>
                </div>
            
        </>
    )
}
