import React from 'react'

export default function navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Exercise Tracker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Exercise</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/create">Create Exercise Log</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">Create User</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
