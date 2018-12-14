import React, {useState,useEffect,useReducer , useContext} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import  axios from 'axios';
import  Lyrics from './components/Lyric';
import  Navbar from './components/Layouts/Navbar';
import  Index  from './components/Index'
import './App.css' ;
import context from './context';
const reducer  = (state,action) => {
    switch(action.type){
      case "ADD_TRACKS" :
       return action.payload 
      default : 
       return  state 

    }

}


export default function(){
 
  const [track_list , dispatch]      = useReducer(reducer,[])
  const  [title,updateTitle] = useState("")
   
   useEffect(() => {
      axios.get(` https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
           .then(res => {
              dispatch({
                type : "ADD_TRACKS",
                payload : res.data.message.body.track_list
              })
              updateTitle("TOP 10 TRACKS")
           })
   },[])
    return (
       <context.Provider value = {{dispatch , track_list , title , updateTitle}}>
       <>  
       <Navbar/>
      <BrowserRouter>
      <React.Fragment>
         <Route exact path = "/"  component = {Index} />
         <Route exact path = "/lyric/track/:id" component = {Lyrics}/>
        </React.Fragment>
        </BrowserRouter>
        </>
        </context.Provider>
    )


}






























// function appreducer(state,action){
//   switch(action.type){
//     case 'add':
//       return [
//         ...state,
//         {
//           id : Date.now(),
//           text : `start ${state.length}`,
//           completed  : false,
//         }
//       ]
//       case 'delete' : 
//        return state.filter(item => item.id !== action.payload)
//       case 'completed' : 
//        return state.map(item =>  {
//                 return {
//                   ...item,
//                   completed : action.payload === item.id ? !item.completed : item.completed
//                 }
//        }

//        )  
//        case 'reset' :
//        return action.payload
//     default :
//      return  state  
//   }

// }



// const Context = React.createContext();

// export default function(){
//   const [state,dispatch] = useReducer(appreducer,[]);
   

//   useEffect(() => {
//     const raw = localStorage.getItem('data');
//     dispatch({type : 'reset' , payload : JSON.parse(raw)})
//   },[])


//    useEffect(() => {
//     localStorage.setItem('data' , JSON.stringify(state))
//    } , [state]);


  

//   return (
//     <Context.Provider value={dispatch}>
//     <div>
//       <h1>Todos App</h1>
//       <button onClick = {() => {dispatch({type : "add"})} }>Add</button>
//       <TodosList state = {state}/>
//     </div>
//     </Context.Provider>
//   )  
// }





// function TodosList({state}){
//  return state.map(item => (<TodoItem  id = {item.id} text = {item.text} key = {item.id} {...item}/>))

// }

// function TodoItem({id , text , completed}){
//   const dispatch = useContext(Context);
//   return <>
//   <div>{text}</div>
//   <input type = "checkbox" checked={completed} onChange = {() => dispatch({type : "completed" , payload : id})}/>
//     <input type = "text" defaultValue = {text}/>
//     <button onClick= {() => {dispatch( {type : "delete" , payload : id })}}>Delete</button>
//   </>
// }


























// function shuffle(array){
//   const _array = array.slice(0);
//   for(let i = 0 ; i < _array.length - 1 ; i++){
//     let randomIndex = Math.floor(Math.random()*i+1);
//     let temp = _array[i];
//     _array[i] = _array[randomIndex];
//     _array[randomIndex] = temp;
//   }

//   return _array;

// }





// function initializeDeck(){
//   let id = 0;
//   const cards = ['react' , 'reactu' , 'redux' , 'vue' , 'angular' , 'javascript' , 'ruby' , 'rails'].reduce((acc,type) => {
//             acc.push({
//               id : id++,
//               type
//             })
//             acc.push({
//               id : id++,
//               type
//             })
//             return acc;
//   },[]);
//   return shuffle(cards)

// }




// export default () => {
//   const [flipped,setFlipped] = useState([]);
//   const [cards,setCards] = useState([]);
//   const [dimension , setDimension] = useState(400);
//   const handleClick = (id) => {
//      setFlipped([...flipped,id])
//   }
//   const resizeBoard = () => {
//     setDimension(Math.min(
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth
//     ))
// }
//   useEffect(() => {
//     resizeBoard();
//     setCards(initializeDeck())
//   },[])

//   useEffect(() => {
//     const resizeListener = window.addEventListener('resize' , resizeBoard);
//     return () => window.removeEventListener('resize' , resizeListener);
//   })
//   return (
//       <div>
//         <h2>Can you remember where the cards are</h2>
//         <Board
//          cards = {cards}
//          dimension = {dimension}
//          flipped = {flipped}
//          handleClick = {handleClick}  
//         />
//       </div>
//   )
// }
































// export default () =>  {
//     const toggleComplete = i => setTodos(
//       todos.map((todo,k) => {return k === i ? {...todo,completed : false}: todo})
//     )
//     const [todos , setTodos] = useState([])
//     return (
//       <div className="App">
//         <Form onSubmit = {text => setTodos([{text , completed : false},...todos])}/>
//         {
//           todos.map((x,i) => <div 
//           key = {x.text} 
//           onClick = {() => {toggleComplete(i)}}
//           style={{textDecoration : x.completed ? "line-through" : " " }}>{x.text}</div>)
//         }
//       </div>
//     );
//   }





