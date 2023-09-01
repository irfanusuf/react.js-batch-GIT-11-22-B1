import React from 'react'

const Navbar = () => {
  return (

    
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">


<div className="container-fluid">


  <a className="navbar-brand" href="/">Zaeka-E-Kashmir</a>


  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Our Food Menu
        </a>
        
        <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item text-light" href="/KashmirFood.html">Kashmiri Food </a></li>
          <li><a className="dropdown-item text-light" href="#">Tibetan Food </a></li>
          <li><a className="dropdown-item text-light" href="#">Desi Cusine</a></li>
          
        </ul>
      </li>


      <li className="nav-item">
        <a className="nav-link active" href="/about.html">Orders</a>
      </li>

      <li className="nav-item">
        <a className="nav-link active" href="/about.html">Vacations</a>
      </li>

      <li className="nav-item">
        <a className="nav-link active" href="/privacy.html">Blogs </a>
      </li>
      
    </ul>

    

    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>




  </div>
</div>
</nav>

    </div>
  )
}

export default Navbar