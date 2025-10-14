import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./components/supabaseClient";

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import WhyChooseUs from "./components/pages/WhyChooseUs";
import Contact from "./components/pages/Contact";
import SectionDivider from "./components/SectionDivider";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/pages/Footer";

// Product Pages
import Printer from "./components/items/Printer";
import Laptop from "./components/items/Laptop";
import Accessorry from "./components/items/Accessory";
import Monitor from "./components/items/Monitor";
import CCTV from "./components/items/Cctv";
import CustomPc from "./components/items/CustomPc";
import TestSupabase from "./components/TestSupabase";

// Admin
import AdminLogin from "./components/AdminLogin";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    }
    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user || null),
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar user={user} />
        <Routes>
          {/* Client pages */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <SectionDivider />
                <Products user={user} />
                <WhyChooseUs />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<WhyChooseUs />} />
          <Route path="/printer" element={<Printer />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/accessory" element={<Accessorry />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/custompc" element={<CustomPc />} />
          <Route path="/cctv" element={<CCTV user={user} />} />
          <Route path="/product" element={<Products />} />

          {/* Admin */}
          <Route
            path="/admin/login"
            element={<AdminLogin onLogin={setUser} />}
          />
          <Route
            path="/admin/dashboard"
            element={<ProtectedAdminRoute user={user} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/test" element={<TestSupabase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
