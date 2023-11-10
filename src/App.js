import "./App.css";
import React from "react";
import { ReactDOM } from "react";
// import Header from "./pages/Common/Header";
// import GlobalStyle from "./style-component/Global_style";
// import Container from "./pages/CommonLayer/CommonLayer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import BoardListLayout from "./pages/page-components/Post/BoardListLayout";
import PostLayout from "./pages/page-components/Post/PostLayout";
import PostingLayout from "./pages/page-components/Post/PostingLayout";
import StoreListLayout from "./pages/page-components/StoreList/StoreListLayout";
import Home from "./pages/page-components/Randing/Home";
import StoreLayout from "./pages/finished-pages/store/StoreLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/StoreListLayout" element={<StoreListLayout />} />
          <Route path="/StoreLayout" element={<StoreLayout />} />
          <Route path="/BoardListLayout" element={<BoardListLayout />} />
          <Route path="/PostLayout" element={<PostLayout />} />
          <Route path="/PostingLayout" element={<PostingLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
