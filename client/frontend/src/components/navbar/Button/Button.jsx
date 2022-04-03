import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = () => {
    return (
        <Link to='/sign-in'>
            <button className='btn'>Sign In</button>
        </Link>
    )
}

export default Button