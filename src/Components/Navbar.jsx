import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

function Navbar() {
  return (
    <div className='fluid inline'>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="#!" to={'/'}>Blog.COM</Link>

          <div className=''>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item"><Link className="nav-link active" to='/'>Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to='/addblog'>Post</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" href="#">Blog</Link></li>
              <li className="nav-item"><Logout/></li>
            </ul>
          </div>

        </div>
      </nav>

    </div>
  )
}

export default Navbar