import { useState } from "react";
import "./App.css";
import Todolist from "./assets/Component/Todolist";

function App() {
  const [inputList, setinputList] = useState("");
  const[items,setitems]=useState([]);

  function itemEvent(event) {
    setinputList(event.target.value);
  }


  function listOfitem () {
setitems((olditems)=>{
  return [...olditems,inputList]
})
    setinputList('')
  }


  const deleteitem=(id)=>{
    console.log('delete')
    setitems((olditems)=>{
      return olditems.filter((arrelem,index)=>{
return index!==id
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={itemEvent} value={inputList} />
          <button onClick={listOfitem}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

{
  items.map((itemval,index)=>{
    return <Todolist key={index} id={index} text={itemval} onselect={deleteitem}/>
  })
}

          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
