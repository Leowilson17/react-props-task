import "./App.css";
import Home from "./pages/Home/home";
import Slider from "./pages/Slider/slider";
import Box from "./pages/boxes/box";
import Test from "./pages/Test/test";

function App() {
  return (
    <div className="App">
      <Home name="Get Started" />
      <Slider obj={{ name: "Maruti" }} />
      <Box />
      <Test />     
    </div>
  );
}

export default App;
