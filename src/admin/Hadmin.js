import React from 'react'

function Hadmin() {
  const logout= ()=>{
    localStorage.clear()
    window.location="/login";
  }
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >Admin Dashbord</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/admin">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " tabindex="-1"   href="/admin-customization">create your startmap</a>
        </li>

      </ul>
      <div class="d-flex">
      <button onClick={logout} className="btn btn-danger "> Log out</button>
  
      </div>
    </div>
  </div>
</nav>

    
 




        </div>
    )
}

export default Hadmin
