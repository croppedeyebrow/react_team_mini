import React, { useState } from "react";
import styled from "styled-components";
import HeaderMatpsLogo from "../../images/matps가로로고.png";
import HeadSearchIcon from "../../images/SearchIcon.png";
import CommunicationIcon from "../../images/ChatIcon.png";
import MypageIcon from "../../images/UserIcon.png";

const HeaderTab = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1280px;
  height: 80px;
  border: 2px solid red;
  align-items: center;
`;

const HeaderImg = styled.img`
  margin-left: 20px;
  height: 50px;
  width: 180px;
`;

const HeaderSearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 207px;
  position: relative;
`;

const HeaderRectangle = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #e6e6e6;
  border: none;
  border-radius: 30px 0 0 30px;
  height: 52px;
  width: 446px;
`;

const HeaderSearchWrapper = styled.div`
  background-color: #d94d4d;
  border-radius: 0 30px 30px 0;
  width: 76px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: #bb3939;
  }
`;

const HeaderSearch = styled.img`
  height: 30px;
  width: 30px;
  transition: transform 0.15s;
  ${HeaderSearchWrapper}:hover & {
    transform: scale(0.9);
  }
`;

const HeaderHeadIcon = styled.div`
  display: flex;
  margin-left: 209px;
  margin-right: 20px;
`;

const HeaderTalking = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 1rem;
  transition: transform 0.15s;
  &:hover {
    transform: scale(0.9);
  }
`;

const HeaderUserInterface = styled.img`
  height: 50px;
  width: 50px;
  transition: transform 0.15s;
  &:hover {
    transform: scale(0.9);
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    alert(
      "당신의 맛있는 시간을 위한 장소를 검색합니다. 검색어: " + searchQuery
    );
  };

  return (
    <HeaderTab>
      <HeaderImg alt="헤더가로로고" src={HeaderMatpsLogo} />

      {/* //검색창 */}
      <HeaderSearchBar>
        <HeaderRectangle
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="당신이 고대하던 순간을 위한 검색어를 입력하세요"
        />
        <HeaderSearchWrapper onClick={handleSearchClick}>
          <HeaderSearch alt="검색창돋보기" src={HeadSearchIcon} />
        </HeaderSearchWrapper>
      </HeaderSearchBar>

      {/* 아이콘 */}
      <HeaderHeadIcon>
        <HeaderTalking alt="커뮤니티페이지" src={CommunicationIcon} />
        <HeaderUserInterface alt="로그인,마이페이지" src={MypageIcon} />
      </HeaderHeadIcon>
    </HeaderTab>
  );
};

export default Header;
