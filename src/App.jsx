import { Outlet } from "react-router-dom";
import Header from "./components/Header";


const App = () => {
  return (
     <div className="max-w-5xl mx-auto">
      <Header/>
      <Outlet></Outlet>
    </div>
  );
};

export default App;