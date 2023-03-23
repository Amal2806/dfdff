import { Typography , TextField , Button } from '@mui/material'
import axios from 'axios'
import React,{useState} from 'react'

const Nav = (props) => {
  var [addmovies,setaddmovies]= useState(props.data)
  console.log("add page props"+props.data)


  const handlechange = (e)=>{
    const {name,value} = e.target
    setaddmovies({...addmovies,[name]:value})
    console.log(addmovies)
  }
  const saveData=()=>{
    console.log("botton clicked")
    console.log(addmovies);
    if(props.method === "post"){
  
  axios.post("http://localhost:3006/students/",addmovies)
  .then(response=>{
    alert("Successfully added")
  })
  .catch(error=>{
    alert("Failed")
  })
}
else if(props.method ==="put"){
  axios.post("http://localhost:3006/students/"+addmovies.id,addmovies)
  .then((response)=> {
  console.log("put data" + response.data)
  alert("success")
  window.location.reload(false);
})
.catch((err) =>{
  console.log(err)
})
}
  }
  return (
    <div>
      <Typography type='h4'> Add movies</Typography>
      <form>
       <TextField id="outlined-basic" label="id" variant="outlined" value={addmovies.id} onChange={handlechange}/>
        <br />
        <br />
        <TextField id="outlined-basic" label="Moviename" variant="outlined" value={addmovies.name} onChange={handlechange} />
        <br />
        <br />
        <TextField id="outlined-basic" label="Director" variant="outlined" value={addmovies.grade} onChange={handlechange}/>
        <br />
        <br />
        <TextField id="outlined-basic" label="Language" variant="outlined" value={addmovies.grade} onChange={handlechange}/>
        <br />
        <br />
        <TextField id="outlined-basic" label="Genere" variant="outlined" value={addmovies.grade} onChange={handlechange}/>
        <br />
        <br /> <TextField id="outlined-basic" label="Releaseyear" variant="outlined" value={addmovies.grade} onChange={handlechange}/>
        <br />
        <br />





        <Button variant="contained" color='success' onClick={saveData}>Submit</Button>

      </form>
    </div>
  )
}

export default Nav
