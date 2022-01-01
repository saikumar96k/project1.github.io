import React, {Component} from 'react';
class Info extends Component {
  constructor() {
    super()
    this.state={
      name:'kiran',age:'20', city:'Bangalore'
    }
  }
  handleClick=()=>{setTimeout(()=>{
    this.setState({name:'Prajwal',age:'22',city:'Belgavi'})
  },2000)
}
render(){
      const{name,age,city}=this.state
      return(
        <div className="card">
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h2>{city}</h2>
        <button onClick={this.handleClick}>Change</button>
        </div>
      )}}
export default Info; 