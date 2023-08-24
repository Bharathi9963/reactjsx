import React from 'react';
import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DataTree from './DataTree';
import { useNavigate } from 'react-router-dom';

function JSONData(){
    const [products,setproducts] = React.useState([])
    const navigation=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('name')){
            fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setproducts([...data]))
        }
        else{
            navigation('/Userdata')
        }
       
    
    },[])
    const department=
    [
        {
          "department": "Courses",
          "sub_departments": [
            "C",
            "java",
            'Reactjs'
          ]
        },
        {
          "department": "Games",
          "sub_departments": [
            "Cricket",
            "badminton",
            "kabaddi"
          ]
        },
        {
            "department": "Flowers",
            "sub_departments": [
              "Rose",
              "Tulip"
            ]
          }

      ]
    
    return (
       <>
       {
        products.map((product)=>{
            console.log(product)

        })
       }
       {
        department.map((a)=>{
            return <DataTree department={a}></DataTree>
        })
       }
      
        <DataGrid
            columns={[{ field: 'id' }, { field: 'title' },{field: 'description'},{field: 'price'}]}
            rows={[...products]}
        />

       </>
        
        
    )
}

export default JSONData