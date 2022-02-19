import logo from "./logo.svg";
import "./App.css";
import CatList from "./components/CatList";
import axios from "axios";

function App() {

  return (
    <div style={{backgroundColor: "lightgrey"}}>
      <CatList />
    </div>
  );
}

export default App;
