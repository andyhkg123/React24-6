import "./App.css";
import Navbar from "./components/Navbar";

async function App() {
  //logic
  let result = "";
  const response = await fetch(
    "https://data.etabus.gov.hk/v1/transport/kmb/route/"
  );
  result = await response.json();
  console.log(result.data);
  if (!result) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="App">
      <Navbar />
      {result &&
        result.data.map((item) => {
          return <div>{item.dest_tc}</div>;
        })}
    </div>
  );
}

export default App;
