import React from 'react';
import { useNavigate } from "react-router-dom";
import  TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'; 
import  Box  from '@mui/material/Box';
import Paper  from '@mui/material/Paper';
import  Grid  from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Userdata() {
    const [name,setname] = React.useState('')
    const [phonenumber,setphonenumber] = React.useState('')
    const [email,setemail] = React.useState('')
    const Navigate = useNavigate();
    //if(name===""){
        //window.localStorage.setItem('name',name)
    //}else{
        //alert('This is required field')

    //}

    function save(){
        window.localStorage.setItem('name',name)
        window.localStorage.setItem('phonenumber',phonenumber)
        window.localStorage.setItem('email',email)
       // if(localStorage.getItem('name'))
        Navigate('/JSONData');
 
    }
    return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Item>
                <TextField label="Name" variant='outlined' onChange={(event)=>{setname(event.target.value)}}></TextField>
            </Item>
            <Item>
                <TextField label="Phonenumber" variant='outlined' onChange={(event)=>{setphonenumber(event.target.value)}}></TextField>
            </Item>
            <Item>
                <TextField label="email" variant='outlined' onChange={(event)=>{setemail(event.target.value)}}></TextField>
            </Item>
            <Item>
                <button onClick={save}>Save</button>
            </Item>
        </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default Userdata;