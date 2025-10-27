import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
      <main className="bg-linear-to-r from-\[\#191919\] to-\[\#19191900\]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </main>
    </Router>

  )
}

export default App
