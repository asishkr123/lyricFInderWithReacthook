import React from 'react'
import Track from './Track'

export default function Tracks({track_list,title}) {
    return (
        <div className = "container">
         <h3  style = {{textAlign : "center"}}>{title}</h3>
        <div className="row">
         {
             track_list.map(track => {
                 return (
                     <Track track = {track} key = {track.track.track_id}/>
                 )
             })
         }
        
        </div>
        </div>
    )

    
  
}
