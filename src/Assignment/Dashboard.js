import React from 'react'
import { Link } from 'react-router-dom'


export const Dashboard = () => {
    return (
        <div>
           <body style={{backgroundImage:'url(bck1.jpg)'}}>
           <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{  position: 'fixed', width: '100%', zIndex: '1'}}>
  <a class="navbar-brand" href="#">SAI96K</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ zIndex:'-1', display:'inline-block'}} >
    <ul class="navbar-nav mr-auto flex-column vertical-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/Dashboard">
                  <span data-feather="home"></span >
                  Dashboard <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">
                  <span data-feather="file"></span>
                  
                </Link>
              </li>
              <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Transaction History
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/RiderTH">Rider transaction</Link>
          <Link class="dropdown-item" to="/PassengerTH">passenger transactin</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="#">Wallet Payment</Link>
        </div>
      </li>
      <li class="nav-item">
        
        <Link class="nav-link active" to="/AllPassengers">All Passengers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/Allriders">All Riders</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/Contact">Contact</Link>
      </li>
      
            </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        User
                        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/">Log Out</Link>
        </div>
      </li>
    </ul>

  </div>
</nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
<br></br>
          <div class="row" >
  <div class="col-sm-6" >
    <div class="card" >
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Users</h5>
        <p class="card-text"></p>
        <Link to="/Allriders" class="btn btn-primary">Click me</Link>
      </div>
    </div>
  </div>
  <br></br>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Coins</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click ME</a>
      </div>
    </div>
  </div>
</div>
<br></br>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Sales</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
  <br></br>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Earning</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
</div>

    
          <canvas class="my-4" id="myChart" width="900" height="380"></canvas>
          <h2 style={{backgroundColor:'#00E5FF'}}>ALL RIDERS</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Verify</th>
                  <th>KYC Selfie</th>
                </tr>
              </thead>
              <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Lavkush</td>
      <td>lav@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob84@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Susan</td>
      <td>susan5656@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
  </tbody>
</table>



<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Verify</th>
      <th scope="col">KYC Selfie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>saku</td>
      <td>sak@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Rohit</td>
      <td>rohit96k@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>priyansh</td>
      <td>priyansh@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
  </tbody>
            </table>
          </div>
        </main>
      
    </body>
            
        </div>
    )
}
