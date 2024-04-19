import "./App.css";
import LocalCounter from "./components/LocalCounter";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <div className="App">
      <h1>Local Counter</h1>
      <LocalCounter />
      <h1>Redux Counter</h1>
      <ReduxCounter />
    </div>
  );
}

export default App;
