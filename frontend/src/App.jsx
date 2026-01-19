import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Tasks from "./pages/Tasks";
import Search from "./pages/Search";
import DeletedTaskList from "./pages/DeletedTaskList";
import Home from "./pages/Home";
import Footer from "./pages/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Tasks />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/deleted" element={<DeletedTaskList/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
