

import React from 'react';
import spinner from './spinner.gif'

export default function Loading() {
  return (
    <div className = "container">
      <img src = {spinner} alt = "Loading" style = {{width : "500px" , height : "500px",marginTop : "45px" , marginLeft  : "250px"}}/>  
    </div>
  )
}
