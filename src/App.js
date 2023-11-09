import "./App.css";
import React from "react";
import { ReactDOM } from "react";
// import Header from "./pages/Common/Header";
// import GlobalStyle from "./style-component/Global_style";
// import Container from "./pages/CommonLayer/CommonLayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BoardList from "./pages/Post/BoardList";
// import Post from "./pages/Post/Post";
// import Posting from "./pages/Post/Posting";
// import StoreLayer from "./pages/StoreList/StoreLayer";
import StoreListLayout from "./pages/page-components/StoreList/StoreListLayout";
import Home from "./pages/page-components/Randing/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<StoreListLayout />} />
          {/* <Route path="/" element={<BoardList />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Posting" element={<Posting />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
