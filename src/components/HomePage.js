import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBar from './HeaderBar'
import VisitSched from './VisitSched'

export default function HomePage() {
    return (
  
        <div className="text-center">
            <HeaderBar />
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
