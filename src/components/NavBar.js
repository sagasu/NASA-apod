import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to="/">Take me home</Link>
            </ul>
        </div>
    )
}
