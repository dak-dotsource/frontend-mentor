import logo from "./assets/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="p-2 flex items-center justify-between ">
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex gap-x-6 text-gray-500">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">New</li>
            <li className="hover:text-black cursor-pointer">Popular</li>
            <li className="hover:text-black cursor-pointer">Trending</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
