import "./App.css";
import { TopLeftNavBar } from "./TopLeftNavBar";
import { MiddleSideNavbar } from "./MiddleSideNavbar";
import { Footer } from "./Footer";
import Content from "./Content";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cases } from "./NavbarComponents/Cases";
import { Clients } from "./NavbarComponents/Clients";
import { Reminders } from "./NavbarComponents/Reminders";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopLeftNavBar />
        <div className="main-layout">
          <MiddleSideNavbar />
          <Routes>
            <Route path="/" element={<Content />}>
              <Route path="cases" element={<Cases />} />
              <Route path="clients" element={<Clients />} />
              <Route path="Reminders" element={<Reminders />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
