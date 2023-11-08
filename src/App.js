import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import Header from "./pages/CommonLayer/Header";
import GlobalStyle from "./style-component/Global_style";
import Container from "./pages/CommonLayer/CommonLayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardList from "./pages/CommonLayer/BoardList";
import Post from "./pages/CommonLayer/Post";
import Posting from "./pages/CommonLayer/Posting";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<BoardList/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/Posting" element={<Posting/>} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
