import React from 'react'

export const Home = () => {
    return (
        <div>
         <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="layers"></span>
                  Integrations
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        </div>
<br></br>

<div class="row" >
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Users</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click me</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Coins</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click ME</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Sales</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Earning</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
</div>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Verify</th>
      <th scope="col">KYC selfie</th>
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




    )
}
