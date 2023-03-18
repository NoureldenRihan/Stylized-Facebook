import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Navbar from "./components/Navbar/Navbar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <div className="globalContainer">
        <Navbar />
      </div>
      <div className="separator"></div>
      <div className="globalContainer">
        <div className="mainPage">
          <LeftSidebar />
          <LeftSidebar />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
