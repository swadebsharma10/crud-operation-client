import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
   
    const handleDelete = user =>{
        const agree = confirm(`Are you Sure want to delete ${user.name} ?`);
       if(agree){
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data. deletedCount >0){
                const remainingUsers = displayUsers.filter(u => u._id !== user._id);
                setDisplayUsers(remainingUsers);
                alert('User deleted Successfully')
            }
            
        })
       }


     

    }

    return (
        <section>
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           
          {
            displayUsers.map((user, idx) => (
                <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>
                <button onClick={()=>handleDelete(user)} className="btn btn-xs btn-warning">Delete</button>
                <Link to={`/update-user/${user._id}`}><button className="btn btn-xs btn-primary">Update</button></Link>
                </td>
              </tr>
            ))

          }
           
           
          </tbody>
        </table>
      </div>
        </section>
    );
};

export default Home;