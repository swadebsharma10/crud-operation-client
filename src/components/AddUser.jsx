const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const email = form.email.value;
        const user = {name, address, email};
        // send user data to server
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res =>res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('User Added Successfully');
                form.reset();
            }
        })
    }

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content">
        <h1 className="text-3xl font-bold ">AddUser</h1>
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleAddUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type=" submit" className="btn btn-primary">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
