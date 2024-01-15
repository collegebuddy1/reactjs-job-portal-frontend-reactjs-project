import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import JobDetails from "./pages/JobDetails";
import List from "./pages/List";
import Dashboard from "./AdminDashboard/adminpages/Dashboard";
import FilteListCat from "./pages/FilteListCat";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<JobDetails />} />
          <Route path="/list" element={<List />} />
          <Route
            path="/filterlistcat/:catId/:name"
            element={<FilteListCat />}
          />

          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

