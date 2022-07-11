import React, { useState } from 'react'

const TodoList=()=> { 
  const[inputData,setInputData]=useState('');
  const[AddIteam,setIteam]=useState([]);
  const addIteam=()=>{
    if(!inputData){

  }else{
    
    setIteam([...AddIteam,inputData]) 
    setInputData('')
  }

  }
  const deletItem=(id)=>{
    console.log(id);
   const updateIteams=AddIteam.filter((elem,ind)=>{
   return ind !==id;
     
 });
  setIteam(updateIteams);
  }
  
  return (

 <>
 <div className="container mt-5">
 <div className='col-md-4'>
 <div className="bg-success p-2 text-white">
   
<span><h1>To Do List</h1></span>
<figure>
<figcaption>Add Your List Here </figcaption>
</figure>
 
  <div>
   <input type='text' placeholder='Add iteam....'value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
  <button  className='Demo' onClick={addIteam} >Add Iteam</button>
 </div>
 <div className='showIteam'>
   <div className="eachIteam">
 
  </div>
  </div>
 
  {
   AddIteam.map((elem,ind )=>{
     return(
      <div key={ind}>
      <h2>{elem}</h2>
      
      <button onClick={()=>deletItem(ind)}>delete</button>
      </div>
       )
       
   }) 
  }
  
</div>
</div>
</div>
</>
 
  )
}

export default TodoList