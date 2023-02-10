import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Home = React.lazy(() => import("./Routes/Home"));
const Products = React.lazy(() => import("./Routes/Products"));
const Blog = React.lazy(() => import("./Routes/Blog"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
