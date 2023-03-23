import React, {useEffect,useState} from 'react'
import{Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography}from '@mui/material'
import axios from 'axios'
import Movie from './Movie'
const Movie = () => {
  var [update,setUpdate]= useState(false)
  var [singleValue,setSingleValue]= useState([])
     var [movies,setmovies]= useState([])
     useEffect(()=>{
       axios.get("http://localhost:3006/Movie")
       .then(response=>{
        console.log(response.data)
        setmovies(movies=response.data)
       })
     .catch(err=>console.log(err))
    },)
    const updateValue = (value)=>{
      setSingleValue(value);
      setUpdate(true);
    }
    const deletemovies =(id)=>{
      console.log("delete clicked"+id);
      axios.delete("http://localhost:3006/Movie/"+id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })
      
    }
    var finalJSX =   <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>id</TableCell>
        <TableCell>Movie Name</TableCell>  
        <TableCell>Director</TableCell>
        <TableCell>Language</TableCell>
        <TableCell>Genere</TableCell>
        <TableCell>Release Year</TableCell>  
          <TableCell>delete</TableCell>
          <TableCell>update</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movies.map((value,index)=>{
          return<TableRow>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.MovieName}</TableCell>
            <TableCell>{value.Director}</TableCell>
            <TableCell>{value.Language}</TableCell>
            <TableCell>{value.Genere}</TableCell>
            <TableCell>{value.ReleaseYear}</TableCell>
            <TableCell><Button onClick={()=>deletemovies(value.id)}>delete</Button></TableCell>
            <TableCell><Button onClick={()=>updateValue(value)}>update</Button></TableCell>
            
            </TableRow>
        })}
      </TableBody>
    </Table>
  </TableContainer>
  if(update)
  finalJSX = <Movie data={singleValue} method="put"/>
          return (
      <div>
       <br></br>
       <br></br>
       <br></br>
       {finalJSX}

    </div>
  )
}

export default Movie
