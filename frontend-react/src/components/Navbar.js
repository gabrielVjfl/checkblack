import React from 'react'

let Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar" id="nav">
  <a class="navbar-brand" id="marca" href="#/check">
      <i className="fa fa-calendar-check-o"></i>
          Checklist-Total-Black</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#/check" id="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="tarefas">Tarefas</a>
      </li>
     
    </ul>
  </div>
</nav>
        </div>
    )
}
export default Navbar
