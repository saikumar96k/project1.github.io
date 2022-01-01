import React from 'react'

const Rainbow = (wrappedComponent) => {
const Colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
const randomColour = Colours[Math.floor(Math.random() * 5)];
const className = randomColour + '-text';

return (props) => {
 return(
     <div className={className}>
         <wrappedComponent/>
     </div>
 )
}

}
export default Rainbow;
