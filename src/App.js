import "./App.css";
import { Sidebar } from "./components";
import { Landing } from "./pages";

function App() {
  return (
    <div className="Container">
      <Sidebar/>
      <Landing />
    </div>
  );
}

export default App;
