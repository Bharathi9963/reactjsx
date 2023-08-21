import React from 'react';
import './App.css'

function App(){
  // 1
  function pqr(){
    console.log('Hello Edupoly')
  }
  //2
  function a(e){
    console.log(e)
  }
  // 3
  function b(e){
    console.log(e.clientX)
    console.log(e.clientY)
  }
  // 4
  function c(){
    console.log('Welcome to edupoly')
  }
  // 5
  function d(e){
    console.log(e.target.id)
  }
  // 6
  function e(){
    console.log('Welcome to Edupoly reactjs')
  }
  // 7
  function f(e){
    console.log(e)
  }
  // 8
  function g(){
    console.log((document.getElementById('d1')as HTMLButtonElement).value)
  }
  // 9
  function h(){
    document.getElementById('h4').innerHTML=((document.getElementById('d2')as HTMLButtonElement).value.toUpperCase())
  }
  // 10
  function i(){
    document.getElementById('h4').innerHTML=((document.getElementById('d3')as HTMLButtonElement).value.toUpperCase())
  }
  // 11
  function j(){
    document.getElementById('h4').innerHTML=((document.getElementById('d4')as HTMLButtonElement).value.toUpperCase())
  }
  // 12
  function k(){
    document.getElementById('h4').innerHTML=((document.getElementById('d5')as HTMLButtonElement).value.toUpperCase())
  }
  // 13
  function pqr(e){
    document.getElementById('d6').innerHTML=e.target.value

  }
  function clearText(){
    document.getElementById('d6').innerHTML=""
    document.getElementById('d5').value=""
  }
  // 14
  function addition(){
    const x=document.getElementById('d7').value
    const y=document.getElementById('d8').value
    document.getElementById('h4').innerHTML=x+y

  }
  // 15
  function sub(){
    const u=document.getElementById('d9').value
    const v=document.getElementById('da').value
    document.getElementById('h4').innerHTML=u-v

  }
  // 16
  function mul(){
    const a=document.getElementById('db').value
    const b=document.getElementById('dc').value
    document.getElementById('h4').innerHTML=a*b
  }
  // 17
  function kk(e){
    document.getElementById('h6').innerHTML=e.target.value
  }
  // 18
  const mimg="https://tse1.mm.bing.net/th?id=OIP.tku69jTu8T8LW2ajk0pHWQHaLH&pid=Api&P=0&h=180"
  const fimg="https://tse4.mm.bing.net/th?id=OIP.yZDuhPUIr8ErkDyGD_pEWgHaJ4&pid=Api&P=0&h=180"
  function male(){
    document.getElementById('kl').src=mimg
  }
  function female(){
    document.getElementById('kl').src=fimg
  }
  // 19
  function sel(e){
    document.getElementById('ab').innerHTML=e.target.value
  }
  // 20
  function check(e){
    document.getElementById('ba').innerHTML=e.target.value
  }

  return (
    <>
    1<button onClick={pqr}>click me</button><br></br>

    2<div style={{border:"2px solid",width:"300px",height:"200px"}} onClick={a}>click here to see alert</div><br></br>

    3<div style={{border:"2px solid",width:"300px",height:"200px"}} onClick={b}>click here to see alert</div><br></br>

    4<div style={{border:"2px solid",width:"300px",height:"200px"}} onClick={c}>Welcome to edupoly</div><br></br>

    5<div id="div" onClick={d}>click here to see alert</div><br></br>

    6<h1 onClick={e}>Welcome to Edupoly reactjs</h1><br></br>

    7<button onClick={f}>click here to see alert</button><br></br>

    8<input type="text" id='d1'></input>
    <button onClick={g}>click here</button><br></br>
    
    9<input type="text" id='d2'></input>
    <button onClick={h}>click here</button><br></br>
    <h1 id='h4'></h1>

  10<input type="text" id='d3' onKeyUp={i}></input>
    <h1 id='h4'></h1>

  11<input type="text" id='d4' onBlur={j}></input>
    <h1 id='h4'></h1>

  13<input type="text" id='d5'onKeyUp={pqr}></input>
    <button onClick={clearText}>clear text</button>
    <h1 id='d6'></h1>

  14<input type="text" id='d7'></input>
  <br></br>
    <input type="text" id='d8'></input>
    <button onClick={addition}>addition</button>
    <h1 id='h4'></h1>

  15<input type="text" id='d9'></input>
  <br></br>
    <input type="text" id='da'></input>
    <button onClick={sub}>sub</button>
    <h1 id='h4'></h1>
  
  16<input type="text" id='db'></input>
  <br></br>
    <input type="text" id='dc'></input>
    <button onClick={mul}>mul</button>
    <h1 id='h4'></h1>
    <br></br>

  17<input type="radio" value="INDIA" onChange={kk}></input>Ind
    <input type="radio" value="UNITED STATES OF AMERICA" onChange={kk}></input>USA
    <h1 id='h6'></h1>
    <br></br>

  18<input type="radio" onChange={male}></input>:Male
    <input type="radio" onChange={female}></input>:Female
    <img src="" id='kl'></img>
    <br></br>
  19<select onChange={sel}>
    <option value="IND">INDIA</option>
    <option value="USA">UNITED STATES OF AMERICA</option>
    <option value="SRILANKA">SRILANKA</option>
  </select>
  <h1 id="ab"></h1>
  <br></br>
  20<input type="checkbox" value="react" onChange={check}>React Js</input>
  <input type="checkbox" value="mongo" onChange={check}>Mongo Db</input>
  <input type="checkbox" value="ang" onChange={check}>Angular</input>
  <input type="checkbox" value="Node" onChange={check}>Node Js</input>
  <h1 id="ba"></h1>
    

    </>
  )
}

export default App