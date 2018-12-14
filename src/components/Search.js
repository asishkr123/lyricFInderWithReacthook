import React , {useContext , useState} from 'react';
import context from '../context';
import axios from 'axios';

export default function Search() {
  const {dispatch,updateTitle}   = useContext(context);
  const [search,setSearch] = useState('');
  const  onformSubmit = (e) => {
      e.preventDefault();
      axios.get(
          ` https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${search}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        ).then(res => {
            dispatch({
                type : 'ADD_TRACKS',
                payload : res.data.message.body.track_list
            })
            updateTitle('THE SEARCH RESULTS')
            setSearch('')
        }).catch(err => {
            console.log(err)
        })
       

  }
  return (
    <div className = "card">
    <div className="card-content lighten-1">
    <div className="card-title">
     <h1>
        <i className="material-icons">music_note</i>
        Search for a Song
     </h1>
     <form onSubmit = {(e) => {onformSubmit(e)}}>
     <div className="input-field">
        <input placeholder="Placeholder" id="first_name" type="text" value = {search} onChange = {(e) => setSearch(e.target.value)}/>
        <label for="first_name"></label>
        <button className = "waves-effect blue lighten-2 waves-light btn" type ='submit'> Get Track </button>
        </div>
    </form>
    
    </div>
    </div>
      
    </div>
  )
}
