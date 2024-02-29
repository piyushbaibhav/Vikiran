import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DocLogin from "./pages/DocLogin";
import DocHome from "./pages/DocHome";
import DocFeed from "./pages/DocFeed";
import DocPatient from "./pages/DocPatient";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/doclogin" element={<DocLogin />} />
          <Route path="/dochome" element={<DocHome />} />
          <Route path="/docfeed" element={<DocFeed />} />
          <Route path="/docpatient" element={<DocPatient />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
