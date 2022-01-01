import React, { Component } from 'react'

export default class Apidata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             arr:[]
        }
    }
     componentDidMount(){
         fetch('https://fakestoreapi.com/products')
         .then(response=>response.json())
         .then(result=>{
             this.setState({
                 arr:result
             })
             console.log(result)
         })
         .catch(error=>console.log(error))
     }
    render() {
        return (
            <div>
               {

                   this.state.arr.map((item)=>
                  <>
                      <img src={item.image} width="200px" height="200px"/>
                      <h1 style={{color:'blue'}}>Title:{item.title}</h1>
                      <h2 style={{color:'brown'}}>Price.{item.price}</h2>
                  </>    
                      
                      
                      

                      
                   )
               } 
            </div>
        )
    }
}        
