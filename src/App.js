import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer1 from "./components/Footer1";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <Footer1/>
      </Router>
    
  )
}

export default App;
