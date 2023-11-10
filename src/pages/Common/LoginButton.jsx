import React, { useState } from "react";
import Login2 from "../page-components/loginmypage/Login";
import styled from "styled-components";
import MypageIcon from "../../images/UserIcon.png";

const HeaderUserInterface = styled.img`
  height: 50px;
  width: 50px;
  transition: transform 0.15s;
  &:hover {
    transform: scale(0.9);
  }
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // 불투명한 배경
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  z-index: 3;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeaderWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <HeaderUserInterface
        alt="로그인,마이페이지"
        src={MypageIcon}
        onClick={openModal}
      />
      {isModalOpen && (
        <ModalBackground onClick={closeModal}>
          <LoginModalContainer onClick={(e) => e.stopPropagation()}>
            <Login2 isOpen={isModalOpen} close={closeModal} />
          </LoginModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default HeaderWithModal;
