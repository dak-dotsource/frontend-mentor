import logo from "./assets/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="box-border container mx-auto">
      <header className="p-2 flex items-center justify-between bg-blue-400">
        <img src={logo} alt="logo" />
        <nav className="flex border">
          <ul className="flex align-center w-full  gap-x-6 text-gray-500">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
