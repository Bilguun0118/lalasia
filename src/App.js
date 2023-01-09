import "./App.css";
import Sidebar from "./components/Sidebar";
import { Landing } from "./pages";

function App() {
  return (
    <div className="Container flex flex-d justify-content align-items">
      <Sidebar />
      <Landing />
    </div>
  );
}

export default App;
