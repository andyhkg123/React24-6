import "./App.css";
import Navbar from "./components/Navbar";

async function App() {
  //logic
  let result = "";
  const response = await fetch("http://api.github.com/users/andyhkg123");
  result = await response.json();
  console.log(result);
  if (!result) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
