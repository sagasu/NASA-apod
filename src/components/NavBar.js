import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Take me home</Link>
            </ul>
        </div>
    )
}
