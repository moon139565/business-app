import "./App.css";
import Footer from "./Componentes/Section/Footer/Footer";
import Header from "./Componentes/Section/Header/Header";
import Homepage from "./Componentes/Section/Homepage/Homepage";
import {Route, Routes} from "react-router-dom";
import About from "./Componentes/Pages/About/About";
import Blog from "./Componentes/Pages/Blog/Blog";
import BlankPage from "./Componentes/Section/BlankPage/BlankPage";
import Signup from "./Componentes/Section/Signup/Signup";
import Signin from "./Componentes/Section/Signin/Signin";
import Requireauth from "./Componentes/Requireauth/Requireauth";


function App() {
  return (
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Requireauth>
              <Blog />
            </Requireauth>} />
            <Route path="*" element={<BlankPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
