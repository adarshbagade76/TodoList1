import React, {useState} from 'react';


const UserListForm= (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
           handleChange(e, props.addUser(user));
        }
    }

    return (
        <center>   
        <user datafromparent={AddItem.Data}/>   
       <div className="card" >
       <div className="card-body">
      
 <input type='text' placeholder='FirstName'value={inputData.FirstName} onChange={(e)=>setInputData({...inputData,FirstName: e.target.value})}/><br /><br />
 <input type='text' placeholder="LastName" value={inputData.LastName} onChange={(e)=>setInputData({...inputData, LastName:e.target.value})}/><br /><br />
  <input type='text' placeholder="Email" value={inputData.Email} onChange={(e)=>setInputData({...inputData,Email:e.target.value})}/><br /><br />
  <input type='text' placeholder="Address" value={inputData.Address} to='/editcomp/User' onChange={(e)=>setInputData({...inputData,Address:e.target.value})}/><br /><br />
  {isAdd?<button type="button" class="btn btn-dark"onClick={additem}>ADD</button>:<button type="button" class="btn btn-dark">Update</button>}

 <table className="table">
<thead>
  <tr>
   
    <th scope="col">FirstName</th>
    <th scope="col">LastName</th>
    <th scope="col">Email</th>
    <th scope="col">Address</th>
  </tr>
</thead>
<tbody>
{ props.AddItem.length> 0 ? (
  
 AddItem.map((item,ind)=>{
   const {FirstName,LastName,Email,Address}=item;
   return(
  <tr>
  <th scope="row">1</th>
  <td>{item.FirstName}</td>
  <td>{item.LastName}</td>
  <td>{item.Email}</td>
  <td>{item.Address}</td>
  <Link  to='/Users' type="button" className="btn btn-primary" onClick={()=>onEdit(item)}>Edit</Link>
  <td><button type="button" class="btn btn-secondary"onClick={()=>deleteItem(ind)}>Delete</button></td>
    </tr>

   )
 })   
) : (
<tr>
    <td colSpan={4}>No users found</td>
</tr> 
)
} 

   
</tbody>
</table>
</div>
</div>
</center>

)
}

export default UserListForm;