import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'
import './header.css'

const Header = () => {
    return (
        <>
            <Head />
            <Header>
                <nav className='flexSB'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Courses">All Courses</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/journal">Journal</Link></li>
                    </ul>
                </nav>
            </Header>
        </>
    )
}

export default Header