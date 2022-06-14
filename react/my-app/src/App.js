import './App.css';
import {useState} from 'react';
function Btninc(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    +1
    </button>
  )
}
function Btndec(props) {
 
 return (
   <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
   -1
   </button>
 )
}
function Display(props) {
 return (
   <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
 )
}
function App() {
  const[counter,setCounter]=useState(1);
  const inc=()=>setCounter(counter+1);
  let dec=()=>setCounter(counter-1);
  if(counter<=1){
    dec=()=>setCounter(1);
  }
  return (
    <div className="app">
      <Btninc onClickFunc={inc}/>
      <Display message={counter}/>
      <Btndec onClickFunc={dec}/>
    </div>
  );
}

export default App;
