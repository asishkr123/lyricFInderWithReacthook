import React , {useState} from 'react';



// const useInputValue = (initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   return {
//       value,
//       onChange :  e => setValue(e.target.value),
//       resetValue : () => setValue(" ")
//   }

    
// }






// export default ({onSubmit}) =>  {
//   const { resetValue,...text} = useInputValue(" ");
//   return (
//     <form 
//     onSubmit = {e => {
//         e.preventDefault();
//         onSubmit(text.value);
//         resetValue();
//     }}>
//     <input {...text}/>
//     </form>
//   )
// }



export default ({onFormSubmit}) => {
    const [text,changeText] = useState("");
    const resetValue = () => changeText("");
    const onSubmit = (e) => {
          e.preventDefault();
          onFormSubmit(text);
          resetValue();
    }
    
    return (
        <form
         onSubmit = {onSubmit}
        >

            <input value={text} onChange = {(e) => {changeText(e.target.value)}}/>
        </form>
    )
}