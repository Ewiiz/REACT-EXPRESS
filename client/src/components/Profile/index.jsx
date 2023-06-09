import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/profile.css'

function Profile() {
  return (
    <>
        <div className='container-nav'>
            <div className='container-link'>
                <Link className='link' to="compte">Information Compte</Link>
                <Link className='link'>Information Compte</Link>
                <Link className='link'>Information Compte</Link>
                <Link className='link'>Information Compte</Link>
                <Link className='link'>Information Compte</Link>
                <Link className='link'>Information Compte</Link>
                <Link className='link'>Information Compte</Link>
            </div>
            
        </div>
    </>
  )
}

export default Profile