import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import BlogPage from "../Pages/BlogPage/BlogPage";

export default function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<div> 404 Not Found!!!</div>} />
    </Routes>
  );
}
