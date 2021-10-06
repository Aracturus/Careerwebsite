import React from 'react'
// import dreamlogo from './Images/dreamlogo.png'


export default function NavBar() {
    return (
        <>

        <nav className="navbar " role="navigation" aria-label="main navigation" style={{borderBottom:"3px solid blue"}}>
            <div className="navbar-brand ">
                

                <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a href="/" className="navbar-item has-text-link">
                     Location
                </a>

                <a href="/" className="navbar-item has-text-link">
                    Teams
                </a>
                <a href="/" className="navbar-item has-text-link">
                    Resources
                </a>
                <a href="/" className="navbar-item has-text-link">
                     University
                </a>
                <a href="/" className="navbar-item has-text-link">
                 How We Hire
                </a>


                </div>

                <div className="navbar-end">
                    <div className="buttons">
                    <span className="button is-primary">
                        <strong>SEARCH JOBS </strong>
                    </span>
                    </div>
                </div>
            </div>
        </nav>
        <nav className="  header2-title" role="navigation" aria-label="main navigation" >
            <div className=" container ">      
            
                        <h3 >JOIN OUR TALENT NETWORK &gt; </h3>
                
            </div>

        </nav>



        </>
    )
}
