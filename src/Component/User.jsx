

import { useState } from "react"
 import {useNavigate} from 'react-router-dom'





function User(props) {
 
  const navigate=useNavigate();
 
  const[inputData, setInputData]=useState({id:props.user.id,FirstName:props.user.FirstName, LastName: props.user.LastName, Email: props.user.Email, Address: props.user.Address })
debugger
  const handlesubmit=()=>{

  props.newobj(inputData)
  navigate('/')
  }



   
  return (
   <>
   <center>      
         <div className="card" >
         <div className="card-body">
    <form>  
   <input type='text' placeholder='FirstName'value={inputData.FirstName} onChange={(e)=>setInputData({...inputData,FirstName: e.target.value})}/><br /><br />
   <input type='text' placeholder="LastName" value={inputData.LastName} onChange={(e)=>setInputData({...inputData, LastName:e.target.value})}/><br /><br />
    <input type='text' placeholder="Email" value={inputData.Email} onChange={(e)=>setInputData({...inputData,Email:e.target.value})}/><br /><br />
    <input type='text' placeholder="Address" value={inputData.Address}  onChange={(e)=>setInputData({...inputData,Address:e.target.value})}/><br /><br />
    <button type="submit"  className="btn btn-danger "onClick={() => navigate('/')} >Cancel</button>  
     <button className="btn btn-dark "onClick={handlesubmit} >Update</button>
    </form>  
</div>
</div>
</center>
   </>
  )
}

export default User