import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";

function Todolist({ text,onselect,id}) {

  

  return (
    <>
      <div className="todo_style">
        <li>
      
          <span className="AiFillMinusCircle "><AiFillMinusCircle onClick={()=>{
            onselect(id)
          }} /> </span>{text}
        </li>
      </div>
    </>
  );
}

export default Todolist;
