import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h1>Error 404 </h1>
            <p>Page not found</p>
            <Link to='/LandingPage' >Back To Home</Link>
        </div>
    )
}
