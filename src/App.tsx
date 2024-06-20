import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";

import { next } from "./assets/utils/carousel.ts";
import { startAuthListener } from "./assets/utils/userSession.ts";

import HeaderFooterWrapper from "./components/HeaderFooterWrapper.tsx";

import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Products from "./pages/Products.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

function App() {
  const mounted = useRef(false);

  function onMounted() {
    startAuthListener();
    refresh();
    setInterval(() => {
      next();
    }, 5000);

    window.onscroll = function () {
      refresh();
    };
  }

  function refresh() {
    displayFooterMoveTopButton();
    shrinkNav();
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      onMounted();
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HeaderFooterWrapper>
                <Home />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/products"
            element={
              <HeaderFooterWrapper>
                <Products />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <HeaderFooterWrapper>
                <Contact />
              </HeaderFooterWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <HeaderFooterWrapper>
                <About />
              </HeaderFooterWrapper>
            }
          />

          <Route
            path="/product-details"
            element={
              <HeaderFooterWrapper>
                <ProductDetails />
              </HeaderFooterWrapper>
            }
          >
            <Route
              path="/product-details/random"
              element={
                <HeaderFooterWrapper>
                  <ProductDetails />
                </HeaderFooterWrapper>
              }
            />
            <Route
              path=":id"
              element={
                <HeaderFooterWrapper>
                  <ProductDetails />
                </HeaderFooterWrapper>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function displayFooterMoveTopButton() {
  const movetopElement = document.getElementById("movetop");
  if (movetopElement) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      movetopElement.style.display = "block";
    } else {
      movetopElement.style.display = "none";
    }
  }
}

function shrinkNav() {
  const nav = document.getElementById("site-header");

  if (nav) {
    if (
      document.body.scrollTop >= 80 ||
      document.documentElement.scrollTop >= 80
    ) {
      nav.classList.add("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
    }
  }
}

export default App;
