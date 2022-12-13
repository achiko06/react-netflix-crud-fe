import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movies" element={<Home type="movie"/>}/>
        <Route path="/series" element={<Home type="series"/>}/>
        <Route path="/watch" element={<Watch />}/>
      </Routes>
    </Router>
  );
};

export default App;