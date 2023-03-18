import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="globalContainer">
        <Navbar />
      </div>
      <div className="separator"></div>
      <div className="globalContainer"></div>
    </div>
  );
}

export default App;
