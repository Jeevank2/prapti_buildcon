import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import ProjectDetails from "./pages/projectDetails";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/projects"
            element={<Navigate to="/#projects" replace />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;