import Login from "./components/Login";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <Navbar/>
      <Login/>
    </div>
  );
}

export default App;
