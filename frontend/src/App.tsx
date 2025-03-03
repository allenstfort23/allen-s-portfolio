import "./App.css";
import { API_URL } from "./config";

async function fetchData() {
  const response = await fetch(`${API_URL}/your-endpoint`);
  const data = await response.json();
  console.log(data);
}

function App() {
  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export default App;
