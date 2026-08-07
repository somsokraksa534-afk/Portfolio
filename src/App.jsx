import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WebPage from "./pages/WebPage";
import GraphicPage from "./pages/GraphicPage";
import Photopage from "./pages/Photopage";
import UxUiPage from "./pages/UxUiPage";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // wait a tick for the page to render before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/webproject" element={<WebPage />} />
            <Route path="/graphicproject" element={<GraphicPage />} />
            <Route path="/photoproject" element={<Photopage />} />
            <Route path="/uxuiproject" element={<UxUiPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
