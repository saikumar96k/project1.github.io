import React,{useState} from "react";
const Post = () => {
    const[detail,setDetail]=useState({
        name:'Kushal',age:'23',city:'Bangalore'
});
const change=()=>{
    setDetail
    ({
        name:'Krishna',
        age:'28',
        city:'Bijapur'
    })
}
return(
    <div className="card">
        <h1>{detail.name}</h1>
        <h1>{detail.age}</h1>
        <h2>{detail.city}</h2>
        <button onClick={change}>Click</button>
    </div>
)
}
export default Post;