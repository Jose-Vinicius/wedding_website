import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route, redirect, Navigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx"
import OurHistory from "./pages/OurHistory.jsx"
import Dress from "./pages/Dress.jsx"
import Gifts from "./pages/Gifts.jsx"
import Gallery from "./pages/Gallerry.jsx"
import ConfirmPresence from "./pages/ConfirmPresence.jsx"
import ConfirmedPresence from "./pages/ConfirmedPresence.jsx";

export default function App() {
  return (
    <Fragment className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/dress" element={<Dress />}/>
          <Route path="/gifts" element={<Gifts />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/presence" element={<ConfirmPresence />}/>
          <Route path="/history" element={<OurHistory />}/>
          <Route path="/admin/confirmedpresence" element={<ConfirmedPresence />}/>
        </Routes>
      </Router>
    </Fragment>

    
  )
}