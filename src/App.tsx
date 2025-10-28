import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Faqs from "./pages/Faqs";
import Loader from "./components/ui/Loader";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Faqs = lazy(() => import("./pages/Faqs"));
const TermOfService = lazy(() => import("./pages/TermOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));


function App() {

  return (
    <Router>
      <main className="bg-linear-to-r from-\[\#191919\] to-\[\#19191900\]">
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/tnc" element={<TermOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </Router>

  )
}

export default App
