import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// Navbar(this is called probs) is a functional component that takes an object acb as an argument we can give any name. This object contains the properties title and about, which are used to set the title and about text of the navbar respectively.
export default function Navbar(acb) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${acb.mode} bg-${acb.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{acb.title}</Link>
                    {/* <a className="navbar-brand" href="#">{acb.title}</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">{acb.abouttext}</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className='bg-primary rounded mx-2 ' onClick={()=>{acb.toggleMode('primary')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                            <div className='bg-success rounded mx-2' onClick={()=>{acb.toggleMode('success')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                            <div className='bg-danger rounded mx-2' onClick={()=>{acb.toggleMode('danger')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                            <div className='bg-warning rounded mx-2' onClick={()=>{acb.toggleMode('warning')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                            <div className='bg-info rounded mx-2' onClick={()=>{acb.toggleMode('info')}} style={{height:'20px',width:'20px',cursor:'pointer'}}></div>
                        </div>
                        <div className={`form-check form-switch mx-2 my-2 text-${acb.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={()=>{acb.toggleMode('null')}} type="checkbox" role="switch" id="switchCheckDefault"/>
                            <label className="form-check-label" htmlFor="switchCheckDefault">Mode</label>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


Navbar.prototypes = {
    title: PropTypes.string.isRequired,//its mean our prob(title) should be string and it is required
    about: PropTypes.string  //its mean our prob(about) should be string and it is not required
}
Navbar.defaultProps = {
    title: 'textwork',   //if we not pass any value to title and about then it will take default values
    about: 'about textwork'
}