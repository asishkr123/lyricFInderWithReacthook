import React from 'react'
import {Link} from 'react-router-dom';
export default function Track({track}) {
  return (
    <div className = "col s6" style = {{marginTop : "20px"}}>
       <div className="card  grey lighten-5">
         <div className="card-content blue-text lighten-4">
         <span className="card-title"><i className="material-icons">play_arrow</i>{track.track.track_name.toUpperCase()}</span>
         <h5 style = {{fontWeight : "bold"}}>{track.track.artist_name.toUpperCase()}</h5>
         <Link to = {`lyric/track/${track.track.track_id}`}><h5 className = "grey lighten-2 text-white " style = {{width : "100%" , height : "35px", textAlign : 'center'}}>View Lyrics</h5></Link>
        </div>
         
       </div>
      
    </div>
  )
}
