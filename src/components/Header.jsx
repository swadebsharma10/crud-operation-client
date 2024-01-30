import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="bg-green-400 py-5 rounded-b-2xl">
            <div className="flex justify-evenly items-center">
                <h2 className="text-2xl font-bold text-red-700">CRUD OPERATION</h2>

                <div className="flex gap-x-5">
                <Link className="text-white text-lg" to='/'>Home</Link>
                <Link className="text-white text-lg" to='/add-user'>Add User</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;