import React, { useState } from 'react'
import UserListForm from './Component/UserLIstForm';
import User from './Component/User';




function App() {
  const [newobj,setobj]=useState({})
  const [AddItem, setIteam] = useState([]);
  const userLists=(obj)=>{
    debugger
    setIteam([...AddItem,obj])
  }


  const editobj=(obj)=>{
    debugger
    setobj(obj)
  }

  const updateobj=(obj)=>{
    debugger
    var arr = AddItem.map((elem)=>{
      debugger
      return  obj.id == elem.id?obj:elem

    })
    setIteam(arr)
    
  }
  const deleteItem=(id)=>{
    debugger
  var arr=AddItem.filter((elem)=> id!==elem.id)
    setIteam(arr)
  }

  return (
     <> 
    <UserListForm/>
     <User/>
    </>
  

  )
}

export default App 
 
 