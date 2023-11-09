import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import Header from "./pages/Common/Header";
import GlobalStyle from "./pages/style-components/Global_style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardList from "./pages/page-components/Post/BoardList";
import Post from "./pages/page-components/Post/Post";
import Posting from "./pages/page-components/Post/Posting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Posting" element={<Posting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
