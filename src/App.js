import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import DetailsScreen from "./Screen/DetailsScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/details" component={DetailsScreen} />
        <Route path="/" component={HomeScreen} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
