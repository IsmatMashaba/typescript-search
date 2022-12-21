import React from "react";

type Prop ={
  userInput:string;
  setUserInput:React.Dispatch<React.SetStateAction<string>>
}
/*setUserInput function type and the event type we can get if we hover over them
* then it shows the error type from there*/

export default function SearchForm({userInput,setUserInput}:Prop) {
    function userInputHandler(event:React.ChangeEvent<HTMLInputElement>){
      const input=event.target.value;
        setUserInput(input);
    }
   /* console.log(userInput)*/

  return (
      <div>
     <form>
       <label>Search product  </label>
         <input type='text' onChange={userInputHandler}/>
     </form>
  </div>
  );
}
