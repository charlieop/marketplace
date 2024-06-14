import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { next } from "./assets/utils/carousel.ts";

import HeaderFooterWrapper from "./components/HeaderFooterWrapper.tsx";

import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Courses from "./pages/Courses.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

function App() {
  function onMounted() {
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
    addEventListener("load", onMounted);
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
            path="/courses"
            element={
              <HeaderFooterWrapper>
                <Courses />
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
      console.log("nav-fixed");
    } else {
      nav.classList.remove("nav-fixed");
      console.log("nav-removed");
    }
  }
}

export default App;
