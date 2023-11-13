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
import StoreLayout from "./pages/finished-pages/store/StoreLayout";\
import Signup from "./pages/page-components/Signup/Signup";
import Layout from "./pages/page-components/Login/Layout";
import FindId from "./pages/page-components/FindId/FindId";
import FindPw from "./pages/page-components/FindPw/FindPw";
import MyPage from "./pages/page-components/MyPage/MyPage";
import PrivacyPolicy from "./pages/page-components/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/page-components/TermsOfUse/TermsOfUse";
import Update from "./pages/page-components/Update/Update";


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
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/FindId" element={<FindId />} />
          <Route path="/FindPw" element={<FindPw />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
