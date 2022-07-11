import React, { useState } from 'react'

const Todo1 = () => {
    const [inputData, setInputData] = useState({FirstName: " ", LastName: " ", Email: " ", Phone: " " })
    const [AddIteam, setIteam] = useState([]);
    const[toggleSubmit,setToggleSubmit]=useState(true )
    const [istEditItem,setEditItem]=useState(null)
 const dele=(index)=>{
  var arr = AddIteam.filter((ele,i)=>i!=index?ele:null)
  setIteam(arr)

   }
    
    const addIteam = () => {
       
            if(!inputData){
        
          }else if(inputData && !toggleSubmit){
            setIteam(
                AddIteam.map((elem)=>{
                    if(elem.Item === istEditItem){
                    return{...elem,Item:inputData}
                    
                
                    }
                    return elem;

                })
            )  
          
          setToggleSubmit(true);  
             setInputData( '')
             setEditItem(null)

            }else{
              
         e.preventDefault();
         setIteam([...AddIteam,inputData]) 
          setInputData('')
        }
        const SubmitData=(e)=>{
                 
        e.preventDefault();
        // setIteam([...AddIteam,inputData]) 
        // setInputData('')
        }
    
      
        

      
            }
            
            const editItem=(Item)=>{
                let newEditIteam=AddIteam.find((elem)=>{
                  return elem.Item === Item
              })
             //  setToggleSubmit(false);  
             //  setInputData( newEditIteam.item)
             //  setEditItem(item)
              }
    return (
        <>
            <div className="container mt-5">
                <div className='col-md-4'>
                    <div className="bg-success p-2 text-white">

                        <span><h1>To Do List</h1></span>
                        <figure>
                            <figcaption>Registeration Form </figcaption>
                        </figure>
                        <form>


                            <input type='text' placeholder='First Name' onChange={(e) => setInputData({ ...inputData, FirstName: e.target.value })} name='fn' /><br />

                            <input type="text" placeholder='LastName' onChange={(e) => setInputData({ ...inputData, LastName: e.target.value })} name='ln'></input><br />

                            <input type="text" placeholder="Email" onChange={(e) => setInputData({ ...inputData, Email: e.target.value })} name='Em'></input><br />

                            <input type='text' placeholder='Phone' onChange={(e) => setInputData({ ...inputData, Phone: e.target.value })} name='ph'></input><br />
                            {
                                isAdd?<button className="btn btn-primary" type="Add item" onClick={addIteam}>Add</button>:
                                <button title="Update Item" onClick={EditIteam}>Update</button>
                            } 
                            

                        </form>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AddIteam.map((Item,id)=>{
                                        return( <tr>
                                         <th scope="row">1</th>
                                         <td>{Item.FirstName }</td> 
                                         <td>{Item.LastName}</td>
                                         <td>{Item.Email }</td>
                                         <td>{Item.Phone}</td>
                                         <td><button onClick={()=>editItem(Item)}>Edit</button></td>
                                         <td><button onClick={()=>dele(id)}>Delete</button></td>

                                     </tr>)
                                     })
                            }
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
                        

}

export default Todo1;