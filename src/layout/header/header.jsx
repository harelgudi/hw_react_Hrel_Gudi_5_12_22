import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   <Link className="navbar-brand" href="#">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to={"/page1"}>page1</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to={"/page2"}>page2</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to={"page3"}>page3</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header