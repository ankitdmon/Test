import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

    const [inpval, setINP] = useState({
        name:"",
        email:"",
        title:"",
        department:""
    })
    const setData = (e)=>{
        console.log(e.target.value)
        const {name,value} = e.target
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    const addinpdata = async(e)=>{
      e.preventDefault();
      const {name, email, title, department } =inpval
      const res = await fetch('http://localhost:4000/api/v1/createUser',{
        method: "POST",
        headers:{
          "content-Type": "application/json"
        },
        body:JSON.stringify({
          name, email, title, department
        })
      })
      const data = await res.json()
      console.log(data)
      if(res.status ===404 || !data){
        console.log("error")
      }else{
        alert("data added")
        console.log("data added")
      }
    }

  return (
    <div className='container'>
        <NavLink to="/">Home</NavLink>

        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">name</label>
    <input type="text" onChange={setData} value={inpval.name} name="name" className="form-control" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input type="email" onChange={setData} value={inpval.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label  class="form-label">title</label>
    <input type="text" onChange={setData} value={inpval.title} name="title" className="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">department</label>
    <input type="text" onChange={setData} value={inpval.department} name="department" className="form-control" />
  </div>
  
  <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Register