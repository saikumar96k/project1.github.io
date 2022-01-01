import React, {Component} from 'react'
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard } from './Assignment/Dashboard'
import { Home } from './Assignment/Home'
import { Login } from './Assignment/Login'
import { Navbar } from './Assignment/Navbar'
import Signup from './Assignment/Signup'
import { BrowserRouter as Router, Route, link, Switch, Routes} from "react-router-dom";
import { RiderTH } from './Assignment/RiderTH'
import { Contact } from './Assignment/Contact'
import { PassengerTH } from './Assignment/PassengerTH'
import { Allriders } from './Assignment/Allriders'
import { AllPassengers } from './Assignment/AllPassengers'

class App extends Component {
    render( ) {
        return (
         <div>
            <Routes>
            
            <Route exact path='/' element={<Login/>}/>
            <Route exact path='/Signup' element={<Signup/>}/>
            <Route exact path='/RiderTH' element={<RiderTH/>}/>
            <Route exact path='/Contact' element={<Contact/>}/>
            <Route exact path='/PassengerTH' element={<PassengerTH/>}/>
            <Route exact path='/Allriders' element={<Allriders/>}/>
            <Route exact path='/AllPassengers' element={<AllPassengers/>}/>
            <Route exact path='/Dashboard' element={<Dashboard/>}/>
            <Route exact path='/RiderTH' element={<RiderTH/>}/>
            
           </Routes> 
           
            </div>
        )
    }
}

export default App