


import React , {useContext} from 'react'
import context from '../context'
import Tracks from   './Tracks';  
import Loading from './Loading'
import Search from './Search';





export default function Index() {
  const {track_list , title , dispatch}  = useContext(context)
  return (
    <>
    <Search/>
    {
      track_list.length ? <Tracks track_list = {track_list} title = {title}/> : <Loading/> 
    }
    </>
  )

}
