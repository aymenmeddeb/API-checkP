import React,{useState,useEffect,List} from 'react';
import axios from "axios"
import Table from 'react-bootstrap/Table'

const UserList = () => {
    const [list, setList] = useState([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res=>{const list=res.data;
        setList(list);
    })

    },[]);

    return (
        <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>UserName</th>
            <th>Email</th>
            
          </tr>
        </thead>
          {list.map((el) => 

  <tbody>
    <tr>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
      
    </tr>
    </tbody>
    
           )}
           </Table>
           </div>
    )   
    
}

export default UserList;
