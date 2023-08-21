
import './App.css'
import React, { useState} from 'react'

function App() {
 
   const students=[{
     'firstname':'Divya',
     "Lastname":'Reddy',
     'gender':'Female'
   },
   {
    'firstname':'Bharathi',
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
 function bch(e){
  alert('hi')
  console.log(e)
  console.log(e.target.id)
 
 }
 function agh(e){
  console.log(e.target.innerHTML)

 }
function rty(e){
  const xy=(document.getElementById('df') as HTMLInputElement).value
  console.log(xy)
  
 
}
 var ar=[1,3,4,5,8,9]
 var ar2=['bharathi','reshma','divya']
 var obj={
  'firstname':'Bharathi',
     "Lastname":'Reddy',
     'gender':'Female'
 }
  var img1='data:image/jpeg;base64,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'
 var  img2='data:image/jpeg;base64,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'


var c='pink'
var d='skyblue'
var bg='green'
var g='30px solid'
const [tabledata,settabledata] = React.useState([
  {
    firstname : "Divya",
    lastname : "Rayam",
    age : "22"
  },
  {
    firstname : "Bharathi",
    lastname : "sadda",
    age : "28"
  },
  {
    firstname : "kavya",
    lastname : "reddy",
    age : "26"
  },
  {
    firstname : "Lohith",
    lastname : "reddy",
    age : 40
  }
])
function uvw(){
  settabledata([...tabledata].sort((b,c)=>{
    return (b.firstname<c.firstname)?-1:1

  }))
  
}


function fgh(){
  settabledata([...tabledata].sort((b,c)=>{
    return (b.lastname<c.lastname)?-1:1

  }))
  
}


function rty(){
  settabledata([...tabledata].sort((b,c)=>{
    return (b.age<c.age)?-1:1

  }))
  
}


var t=12



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
<h1>1</h1>
<button onClick={bch}>ClickMe</button>

<h1>3</h1>
<button onClick={bch}>ClickMe</button>
<h1>4</h1>
<div onClick={bch} style={{border:'2px solid',height:'100px'}}>
  click here 
</div>
<h1>5</h1>
<div onClick={bch} style={{border:'2px solid',height:'100px'}} id='mydiv'>
  click here
</div>
<h1>6</h1>
<h1 onClick={agh}>Clickme</h1>
<h1>7</h1>
<input type='text' id='df'></input>
<button onClick={rty}>Clickme</button>
<h1>styling</h1>
<h1>1</h1>
<h1 style={{color:'red'}}>JSX Element</h1>
<h1>2</h1>
<h1 style={{color:'red', backgroundColor:'green'}}>JSX Element</h1>
<h1>3</h1>
<span style={{display:'flex'}}>
{
  ar.map((a)=>{
    return <span style={{border:'1px solid',margin:'10px',padding:'10px'}}>{a}</span>
  })
}
</span>
<h1>4</h1>
<span style={{display:'flex'}}>
{
  ar2.map((a)=>{
    return <span style={{border:'1px solid',margin:'10px',padding:'10px'}}>{a}</span>
  })
}
</span>
<h1>5</h1>
<div style={{border:'1px solid'}}>
{
 Object.entries(obj).map((a)=>{ 
  return <div style={(a[0]==='firstname')?{fontWeight:'bold'}:{}}{...(a[0]==='lastname')?{}:{fontStyle:'italic'}}>{a[0]}:{a[1]}</div>
  
 })
}
</div>
<h1>6</h1>
<div style={{display:'flex'}}>
{
  students.map((a)=>{
    return <div style={{backgroundColor:'skyblue',margin:'20px',border:'1px solid'}}>
      <div>Firstname:{a.firstname}<br></br>Lastname:{a.Lastname}<br></br>Gender:{a.gender}
      <span>
        {
          <img src={a.gender==='Female'?(img1):(img2)}></img>
        }
      </span>
      </div>
      </div>
           
  })
}
</div>
<h1>7</h1>
<table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.Lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
    
   </tbody>
</table>
<h1>9</h1>
<table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr style={(a.gender==='Female')?{backgroundColor:'pink'}:{backgroundColor:'skyblue'}}><td>{a.firstname}</td><td>{a.Lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
    
   </tbody>
</table>
<h1>10</h1>
<h1 style={{color:c}}>This is pink</h1>
<h1>11</h1>

  {<h1 style={{color:c}}>This is pink</h1>}{<h1 style={{color:d}}>This is pink</h1>}
  <h1>12</h1>

<h1 style={{color:c,backgroundColor:bg}}>This is pink</h1>
<h1>13</h1>
<h1 style={{border:g,backgroundColor:'pink'}}>This is pink</h1>


<h1>Table Sorting</h1>
<table border={1}>
        <thead>
          <th onClick={uvw}>Firstname</th>
          <th onClick={fgh}>Lastname</th>
          <th onClick={rty}>Age</th>
        </thead>
        
        <tbody>
          {
          
          
            tabledata.map((v)=>{
              return <tr><td>{v.firstname}</td><td>{v.lastname}</td><td>{v.age}</td></tr>
            })
            
          }

          
        </tbody>

        
      </table>

<h1>14</h1>
{
  <span style={(t%2===0)?{color:'green'}:{color:'red'}}>{t}</span>
}
<h1>15</h1>
{
  <span style={(t%2===0)?{backgroundColor:'green'}:{backgroundColor:'red'}}>{t}</span>
}
<h1>16</h1>
{
  <span style={(t>0)?{backgroundColor:'green'}:{backgroundColor:'red'}}>{t}</span>
}
<h1>17</h1>
{
  <span style={(t.length%2===0)?{backgroundColor:'green'}:{backgroundColor:'red'}}>{t}</span>
}
<h1>19</h1>

   
{
  ar.map((a)=>{
    return <span style={(a%2==0)?{backgroundColor:'green'}:{backgroundColor:'red'}}>{a}</span>
  })
}
 

























    </>
  )
}

export default App
