

import React , {useState , useEffect} from 'react';
import axios  from 'axios';
import {Link}  from   'react-router-dom';
import  Loading from './Loading';
 
export default function Lyric(props) {
  const [lyrics,getLyrics] =   useState({});
  const [track,setTrack]   =   useState({})
  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {
           getLyrics(res.data.message.body.lyrics)
           return axios.get(` https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)

         }).then(res => {
            setTrack(res.data.message.body.track)
         })
         .catch(err => console.log(err))
  },[])
  return (
     <div className="container mb">
     <Link to = "/" className="waves-effect blue lighten-2 waves-light btn"><i className="material-icons left">arrow_left</i>GO Back</Link> 
     {
       Object.keys(lyrics).length ===0  &&   Object.keys(track).length ===0  ? <Loading/> :   ( 
       <>  
       <div className="card" style = {{marginTop : "35px"}}>
       <div className="card-content text-lighten-1">
       <h2 className="card-title"> {track.track_name} by {track.artist_name}</h2>
       <p>{lyrics.lyrics_body}</p>
       </div>
       </div>
       </>
       )
     }
    
           
        
     </div>
  )
}
