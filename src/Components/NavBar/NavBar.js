import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><NavLink to='/ChartPie'>ChartPie</NavLink></li>
                    <li><NavLink to='/ChartLine'>ChartLine</NavLink></li>
                    <li><NavLink to='/ChartRadar'>ChartRadar</NavLink></li>
                    <li><NavLink to='/ChartBar'>ChartBar</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
