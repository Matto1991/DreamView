import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Movies from "./components/movies";
import Form from "./components/form";
import { movies } from "./utils/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Movies movies={movies}/>
      <Form />
    </div>
  );
}

export default App;
