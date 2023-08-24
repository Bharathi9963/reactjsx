import React, { useState} from 'react'
import './App.css'

function App() {
  var students = [
    {
      firstname:"Praveen",
      lastname:"Gubbala",
      age:40,
      gender:'male'
    },
    {
      firstname:"Smrithi",
      lastname:"mandana",
      age:25,
      gender:'female'
    },
    {
      firsname:"mithali",
      latstname:"raj",
      age:39,
      gender:'female'
    },
  ]
  function abc(s){
      document.getElementById("dh").innerHTML=s.lastname
  }
  function abe(s,i){
    document.getElementById("d1").innerHTML=s.lastname
    document.getElementById("d2").innerHTML=i

}
  function abd(s,i){
    document.getElementById('d3').innerHTML=s.firstname
    document.getElementById('d4').innerHTML=s.lastname
    document.getElementById('d5').innerHTML=s.age
    document.getElementById('d6').innerHTML=s.gender
  }

var c=120;
function inc(){
  c++;
  document.getElementById('d7').innerHTML=c
}
function dec(){
  c--;
  document.getElementById('d8').innerHTML=c
}
var d=120;
var g=120;
function reset(){
  document.getElementById('d9').innerHTML=g
}
function inn(){
  d++;
  document.getElementById('d9').innerHTML=d
}
function de(){
  d--;
  document.getElementById('d9').innerHTML=d
}
var ar=[]
 function trwt(){
    (ar.push(document.getElementById('d10') as HTMLInputElement).value)
    console.log(ar)
     
}
function ijk(){
  splice()
}

return(
  <>
    {
      students.map((s)=>{
        return <li>
          {s.firstname}
          <button onClick={()=>{abc(s)}}>See</button>
          </li>
      })
    }
    <h1 id="dh"></h1>
    <br></br>
    {
      students.map((s,i)=>{
        return <li onClick={()=>{abe(s,i)}}>
          {s.firstname}
        </li>
      })
    }
    <h1 id='d1'></h1>
    <h1 id='d2'></h1>
    <br></br>
    {
      students.map((s,i)=>{
        return <li onClick={()=>{abd(s,i)}}>
          {s.firstname}
        </li>
      })
    }
    <h1 id='d3'></h1>
    <h1 id='d4'></h1>
    <h1 id='d5'></h1>
    <h1 id='d6'></h1>
    <h1>{c}</h1>
     
    <h1 id="d7">{c}</h1>
    <button onClick={inc}>increment</button>

    <h1 id="d8">{c}</h1>
    <button onClick={dec}>decrement</button>

    <h1 id='d9'></h1>
    <button onClick={inn}>increment</button>
    <button onClick={de}>decrement</button>
    <button onClick={reset}>Reset</button>

    <input type="text" id='d10'></input>
    <button onClick={trwt}>Click here to add</button>
    <table border='2px'>
      <thead>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Gender</th>
      </thead>
      <tfoot>
        {
          students.map((a)=>{
            return <tr><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.age}</td><td>{a.gender}</td><td><button onClick={ijk}>delete</button></td></tr>
          })
        }
      </tfoot>
    </table>

    </>
  )
}

export default App