import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
    return (
       <div>
           <body style={{backgroundImage:'url(back.jpg)'}}>
         <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">SAI96</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <Link class="nav-link" to="/">LOG IN</Link>
        </li>
      </ul>
    </nav>

          <center><form>
          <span><br>
          
          </br>
          
          <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link type="submit" class="btn btn-primary" to='/Dashboard'>Submit</Link>
  </span>
</form>

<footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 20001–2022 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</center> 
</body>
       </div>
       
    )
}

export default Signup
