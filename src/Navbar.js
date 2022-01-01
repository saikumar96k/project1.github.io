import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Info from './info';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div> <center>
      <nav>
        <div className="logo">Navigation</div>

        <ul className="nav-links" style={{transform: open ? "translateX(0px)": "translateX(-500px)"}}>
          <li><a>Home</a></li>
          <li><a>Product</a></li>
          <li><a>Services</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
    <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav></center>
<Info/>
      
    <center>
      <form><div ><p><b>NAV</b></p>
      <tr>
			<th>Name:<input type="text" name="name" className="nm" id="nm"/></th>
		  </tr><p></p>
		  <tr>
			<th>Color:<input type="text" name="color" id="cl"/></th>
		  </tr><p></p>
		  <tr>
			<th>Background_color:<input type="text" name="Background-color" id="baco"/></th>
		  </tr><p></p>
		  <tr>
			<th><input type="button" name="submit" value="submit" id="sub"/></th>
      </tr>
      </div>
      </form>
      </center>
      

      <center><address>
        <div><b>DIST : Belagavi</b></div>
        <div><b>STATE : Karnataka</b></div>
        <div><b>COUNTRY : INDIA</b></div>
      </address></center>
       </div>
  );

}

export default App;

/*import React from 'react';

function Navbar() {
    return(
        <div>
         Navbar   
        </div>
    )
}


export default Navbar*/
