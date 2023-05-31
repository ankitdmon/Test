import React, { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [getuserdata, setUserData] = useState([])
  
  const getdata = async(e)=>{
    
    const res = await fetch('http://localhost:4000/api/v1/getallUsers',{
      method: "GET",
      headers:{
        "content-Type": "application/json"
      },
      
    })
    const data = await res.json()
    console.log(data)
    if(res.status ===404 || !data){
      console.log("error")
    }else{
      setUserData(data)
      console.log("data added")
    }
  }

  useEffect(()=>{
    getdata()
  },[])



  return (
    <div className='mt-5'>
        <div className="container">
            <div className="add_btn mt-2">
                <NavLink to="/register" className='btn btn-primary'>Add Employee</NavLink>
            </div>
            <table class="table">
  <thead>
    <tr className="table-dark">
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">title</th>
      <th scope="col">department</th>
    </tr>
  </thead>
  <tbody>
    
        <tr>
        <th scope="row">1</th>
        <td>{getuserdata.data[0].name}</td>
        <td>{getuserdata.data[0].email}</td>
        <td>{getuserdata.data[0].title}</td>
        <td>{getuserdata.data[0].department}</td>
        <td className='d-flex justify-content-between'>
          <button className='btn btn-success'>read</button>
          <button className='btn btn-primary'>update</button>
          <button className='btn btn-danger'>delete</button>
        </td>
      </tr>         
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home