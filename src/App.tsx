
import './App.css'
import React, { useState} from 'react'

function App() {
 
   const students=[{
     'firstname':'Bharathi',
     "Lastname":'Reddy',
     'gender':'Female'
   },
   {
    'firstname':'Divya',
    "Lastname":'Naidu',
    'gender':'Female'
  },
  {
    'firstname':'Ravi',
    "Lastname":'Reddy',
    'gender':'Male'
  }
  ]
const  [count,setcount]=React.useState(1)
  
  function abc(){
    setcount(count+1)
  }
  function xyz(){
    setcount(count-1)
  }
  const  [todo,settodo]=React.useState(['bharathi','Reshma','Divya','Harshitha'])
  function fgh(){
  const x=(document.getElementById('dd')as HTMLInputElement).value;
   settodo([...todo,x])
}

 
  return (
    <>
      <h1>count</h1>
      <table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr style={(a.gender=='Female')?{backgroundColor:'pink'}:{backgroundColor:'skyblue'}}><td>{a.firstname}</td><td>{a.Lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
  
   </tbody>
</table>
<h1>{count}</h1>
<button onClick={abc}>Increment</button>
<button onClick={xyz}>Decrement</button>
<input type='text' id='dd'></input>
<button onClick={fgh}>Click me</button>


{
      todo.map((a)=>{
        return <li>{a}</li>
      })
      
}














    </>
  )
}

export default App
