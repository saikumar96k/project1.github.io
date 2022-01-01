import React from 'react'
import { Link } from 'react-router-dom'

export const PassengerTH = () => {
    return (
       <div>
           <body style={{backgroundImage:'url(bck1.jpg)'}}>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">SAI96K</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto flex-column vertical-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/Dashboard">
                  <span data-feather="home"></span>
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
          <a class="dropdown-item" href="#">Help</a>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/">Log Out</Link>
        </div>
      </li>
    </ul>

  </div>
</nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          
        <div style={{marginTop:'405px', height:'100%'}}>
          <h2>ALL PASSENGERS TRANSACTION HISTORY</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lavkush</td>
                  <td>Goa</td>
                  <td>Belagavi</td>
                  <td>50$</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>KItzzz</td>
                  <td>Belagavi</td>
                  <td>Goa</td>
                  <td>90$</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sai</td>
                  <td>Dehali</td>
                  <td>Noida</td>
                  <td>200$</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>Noida</td>
                  <td>Jammu</td>
                  <td>500$</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ronit</td>
                  <td>Bangalore</td>
                  <td>Kerla</td>
                  <td>50$</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </main>
      
</body>
        </div>
    )
}
