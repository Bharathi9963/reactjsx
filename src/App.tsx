import './App.css'
import React from "react"

function App() {
  const students=[
    {
      "firstname":"divya",
      "lastname":"chowdary",
      "gender":"female"
        
    },
    {
      "firstname":"bharath",
      "lastname":"reddy",
      "gender":"male"
        
    },
    {
      "firstname":"sireesha",
      "lastname":"reddy",
      "gender":"female"
        
    },
    {
      "firstname":"harshit",
      "lastname":"chowdary",
      "gender":"male"
        
    },
  ]
   

  const [count, setCount]=React.useState(1)
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }

  function pqr(){
    alert("Hello Edupoly")
  }

  const [todos,setTodos]=React.useState(["get internship","buy bmw","goto hometown"])
  function addtodo(){
    const nt=(document.getElementById("d1") as HTMLInputElement).value;
    setTodos([...todos,nt])

  }

  //1
  function abc(){
    alert("Hello Rayam")
  }

  //2
  //function con(e){
    //console.log(Hello Edupoly)
 // }

  //3
  function fgh(e){
    console.log(e)
  }

  //4
  function jkl(e){
    console.log(e)
  }

  //5
  function hij(e){
    console.log(e.clientX)
    console.log(e.clientY)

  }

  //6
  function abd(e){
    console.log(e.target.innerHTML)

  }
  //7
  function afg(e){
    console.log(e.target.id)

  }

  //9
  function xyz(){
    console.log((document.getElementById("d3") as HTMLInputElement).value)
  }
  //10
  function ddg(){
    document.getElementById("hh").innerHTML=(document.getElementById("d4") as HTMLInputElement).value.toUpperCase()
  }

  //11,12
  function aaa(){
    document.getElementById("h1").innerHTML=(document.getElementById("d5") as HTMLInputElement).value.toUpperCase()
  }

  //13
  function bbb(e){
    document.getElementById("h4").innerHTML=e.target.value
  }

  //14
  function ccc(e){
    document.getElementById("h5").innerHTML=e.target.value
  }
  function clearText(){
    document.getElementById("h5").innerHTML="";
    document.getElementById("d7").value=""
  }

  //15
  function butt(){
    const x= +document.getElementById("d8").value
    const y=+document.getElementById("d9").value
    document.getElementById("h9").innerHTML=x+y


  }

  //16
  function sub(){
    const x= +document.getElementById("f1").value
    const y=+document.getElementById("f2").value
    document.getElementById("h8").innerHTML=x-y


  }

  //17
  function mul(){
    const a= +document.getElementById("f3").value
    const b=+document.getElementById("f4").value
    document.getElementById("hf").innerHTML=a*b
  }
  function div(){
    const a= +document.getElementById("f3").value
    const b=+document.getElementById("f4").value
    document.getElementById("hf").innerHTML=a/b
  }

  //18
  function lmn(e){
    document.getElementById("ff").innerHTML=e.target.value

  }

  //19
  const maleimg="https://th.bing.com/th/id/OIP.VpGaWF3f9tSM-0J_aU8jqQHaH4?pid=ImgDet&rs=1"
  const femaleimg="https://th.bing.com/th/id/OIP.MGXWfVh6IdzfUHuZi_TrvgHaHa?pid=ImgDet&rs=1"
  function mal(){
    document.getElementById("im").src=maleimg
  }
  function fem(){
    document.getElementById("im").src=femaleimg
  }
  //20
  function sel(e){
    document.getElementById("ab").innerHTML=e.target.value

  }

  //22
  function cdate(e){
    document.getElementById("kk").innerHTML=e.target.value

  }

  //23
  function abb(k){
    document.getElementById("eh").innerHTML=k
  }
  //24
  const ar=['divya','siri','harshi','resh']
   function jk(i){
    alert(i)
   }

   //26

   var ar1 = [
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
      firstname:"mithali",
      lastname:"raj",
      age:39,
      gender:'female'
    },
    {
      firstname:"Rohit",
      lastname:"Sharma",
      age:35,
      gender:'male'
    },
    {
      firstname:"Sachin",
      lastname:"Tendulkar",
      age:50,
      gender:'male'
    },
  ];

  function fff(firstname){
    alert(firstname)

  }

   


    
  




  return (
    <>

    <h3>{count}</h3>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>Decrement</button>
    <br></br>

    <button onClick={()=>{alert("hi")}}>Hi</button>
    <br></br>

    <button onClick={()=>{pqr()}}>Hello</button>

    <button onClick={pqr}>Hello</button>
    
    
    <table border={2}>
      <thead>
        <th>Firstname</th>
        <th>lastname</th>
        <th>gender</th>
      </thead>
      <tbody>
        {
          students.map((a)=>{
            return <tr style={(a.gender==="female")?{backgroundColor:"pink"}:{backgroundColor:"lightblue"}}>
              <td>{a.firstname}</td>
              <td>{a.lastname}</td>
              <td>{a.gender}</td>
              </tr>
          })
        }
      </tbody>
    </table>
    <br></br>


   <input type="text" id="d1"/>
   <button onClick={addtodo}>Add Todo</button>
   <ul>
    {
      todos.map((todo)=>{
        return <li>{todo}</li>
      })
    }
   </ul>
   <br></br>

   <button onClick={abc}>My button</button>

  

   <button onClick={fgh}>click here to object</button>

   <div style={{width:"300px",height:"200px",border:"2px solid black"}} onClick={jkl}>Click here to see alert</div>
   <br></br>
   <br></br>


   <div style={{width:"300px",height:"200px",border:"2px solid black"}} onClick={hij}>Click here to see alert</div>
   <br></br>

   <div style={{width:"300px",height:"200px",border:"2px solid black"}} onClick={abd}>X=10, Y=20</div>
   <br></br>

   <div id="d2" style={{width:"300px",height:"200px",border:"2px solid black"}} onClick={afg}>Welcome to  React Js</div>

   <h1 onClick={abd}>Welcome to Edupoly ReactJs</h1>

   <button onClick={fgh}>Click  Alert</button>
   <br></br>
   <br></br>


   <input type="text" id="d3"></input>
   <button onClick={xyz}>Click here</button>
   <br></br>


   <input type="text" id="d4"></input>
   <button onClick={ddg}>to uppercase</button>
   <h1 id="hh"></h1>
   <br></br>


   <input type="text" id="d5" onKeyUp={aaa}></input>
   <h1 id="h1"></h1>
   <br></br>


   <input type="text" id="d5" onBlur={aaa}></input>
   <h1 id="h1"></h1>
   <br></br>

   <input type="text" id="d6" onKeyUp={bbb}></input>
   <h1 id="h4"></h1>


   <input type="text" id="d7" onKeyUp={ccc}></input>
   <h3 id="h5"></h3>
   <button onClick={clearText}>clearText</button>
   <br></br>
   <br></br>


   <input type="text" id="d8"></input>
   <input type="text" id="d9"></input>
   <button onClick={butt}>Add</button>
   <h3 id="h9"></h3>


   <input type="text" id="f1"></input>
   <input type="text" id="f2"></input>
   <button onClick={sub}>Sub</button>
   <h3 id="h8"></h3>

   <input type="text" id="f3"></input>
   <input type="text" id="f4"></input><br></br>
   <button onClick={mul}>mul</button>
   <button onClick={div}>div</button>
   <h3 id="hf"></h3>


   <input type="radio" value="INDIA" onChange={lmn}></input>IND
   <input type="radio" value="UNITED STATES" onChange={lmn}></input>USA
   <h3 id="ff"></h3>

    
   <input type="radio" value="male" onChange={mal}></input>:Male
   <input type="radio" value="female" onChange={fem}></input>:Female
   <img src="" id="im"></img>
   <br></br>
   <br></br>
   
   <select onChange={sel}>
    <option value="IND">india</option>
    <option value="USA">United States</option>
    <option value="GER">germany</option>
   </select>
   <h4 id="ab"></h4>


   <input type="date" onChange={cdate}></input>
   <h1 id="kk"></h1>  

   
   <button onClick={()=>abb(1)}>Button1</button>
   <button onClick={()=>abb(10)}>Button2</button>
   <button onClick={()=>abb(200)}>Button3</button>
   <button onClick={()=>abb(9999)}>Button4</button>
   <h1 id="eh"></h1>



  <ul>
   {
   ar.map((a,i)=>{
    return <li onClick={()=>jk(i)}>{a}</li>
   })
  }
  </ul>


  <ul>
    {
      ar1.map((b)=>{
        return <li onClick={()=>fff(b.firstname)}>{b.firstname}</li>
      })
    }
  </ul>


  








   


  
















   


   









   </>
  )
}

export default App