import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {
  
    
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
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Edit