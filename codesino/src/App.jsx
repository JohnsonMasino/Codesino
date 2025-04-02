import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from './pages/Home';
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} /> 
    </Routes>
  );
}

export default App;
