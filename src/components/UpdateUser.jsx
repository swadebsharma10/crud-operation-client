import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const {name, address, email} = loadedUser;
   
    const handleUpdateUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const email = form.email.value;
        const updateUser = {name, address, email};
        
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('User updated Successfully');
                // form.reset();
            }
            
        })
        
    }
    


    return (
        <section>
            <h2 className="text-center text-2xl font-medium text-primary">Update User</h2>
            <div className="hero min-h-screen ">
            <div className="hero-content">
              <h1 className="text-3xl font-bold ">UpdateUser</h1>
              <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateUser} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      defaultValue={address}
                      placeholder="Address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={email}
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type=" submit" className="btn btn-primary">Update User</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    );
};

export default UpdateUser;