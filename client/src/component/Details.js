import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Details = () => {

  // const {id} = useParams("")
  // console.log(id)
  
  // const getdata = async()=>{
  //   const [getuserdata, setUserData] = useState([])
  //   const res = await fetch(`http://localhost:4000/api/v1/getUserById/${id}`,{
  //     method: "GET",
  //     headers:{
  //       "content-Type": "application/json"
  //     },
      
  //   })
  //   const data = await res.json()
  //   console.log(data)
  //   if(res.status ===404 || !data){
  //     console.log("error")
  //   }else{
  //     setUserData(data)
  //     console.log("data added")
  //   }
  // }

  // useEffect(()=>{
  //   getdata()
  // },[])

  return (
    <div className='container mt-3'>
        <h1>Welcome</h1>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
        <h3>Name: <span>name</span></h3>
        <h3>Email: <span>email</span></h3>
        <h3>title: <span>title</span></h3>
        <h3>Department: <span>department</span></h3>
        </div>
        <div>
        <button className='btn btn-primary'>update</button>
        <button className='btn btn-danger'>delete</button>
        </div>
      </CardContent>
      </Card>
        </div>
  )
}

export default Details