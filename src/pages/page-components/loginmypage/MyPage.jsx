import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Items,
} from "../../style-components/loginmypage/MyPageComponent";
import Settings from "../../../images/settings.png";
import AxiosApi from "../../../Api/AxiosApi";
import Modal from "../../../util/Modal";
import ProfileImg from "../../../images/profileImg.png";

//닉네임

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // 모달 상태
  const [inputNick, setInputNick] = useState("");
  const [nickname, setNickname] = useState("");
  var userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  if (userInfo.my_profile_img == null) {
    userInfo.my_profile_img = ProfileImg;
  }

  const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  const onClickLogout = async () => {
    window.localStorage.setItem("userInfo", ""); // 브라우저 로컬 스토리지에 유저 정보 저장
    window.localStorage.setItem("userId", ""); // 브라우저 로컬 스토리지에 아이디 저장
    window.localStorage.setItem("userPw", ""); // 브라우저 로컬 스토리지에 패스워드 저장
    window.localStorage.setItem("isLogin", "FALSE"); // 로그인 상태 저장
    navigate("/Login");
  };

  const onClickUpdate = async () => {
    navigate("/Update");
  };

  // 모달 열기 함수
const openModal = () => {
  setModalOpen(true);
};
// 모달 닫기 함수
const closeModal = () => {
  setModalOpen(false);
};
// 탈퇴 로직 (여기서는 단순히 모달을 닫습니다. 실제 탈퇴 로직을 추가하세요.)
const onConfirm = () => {
  // 탈퇴 로직
  closeModal();
};

  return (
    <>
      <Container>
        <Items className="title">MyPage</Items>
        <Items className="prfimg rounded">
          <img src={userInfo.my_profile_img} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
        </Items>
        <Items className="nick">{userInfo.my_nickname}</Items>
        <Items className="point" onClick={onClickUpdate}>내 정보 수정 </Items>
        <Items className="present">
          <div>
            저장한 맛집
            <p>0</p>
          </div>
          <div>
            예약한 내역
            <p>0</p>
          </div>
          <div>
            리뷰 확인
            <p>0</p>
          </div>
          <div>
            내가 쓴 글<p>0</p>
          </div>
          <div>
            최근 본 맛집
            <p>0</p>
          </div>
        </Items>
        <Items className="link">
          <p>문의 및 알림</p>
          <div button onClick={() => window.open("/TermsOfUse", "_blank")}>이용약관</div>
          <div button onClick={() => window.open("/PrivacyPolicy", "_blank")}>개인정보처리방침</div>
          <div>현재 버전</div>
          <div onClick={openModal}>회원 탈퇴</div>
          {modalOpen && (
      <Modal
        open={modalOpen}
        close={closeModal}
        header="회원 탈퇴"
        onConfirm={onConfirm}
      >탈퇴 후 회원정보는 영구 삭제되며 복원되지 않습니다. 정말 탈퇴하시겠습니까? 
      <button onClick={onConfirm}>예</button>
      </Modal>
    )}
        </Items>
        <Items className="foot">
          <div className="logout" onClick={onClickLogout}>
            로그아웃
          </div>
        </Items>
      </Container>
    </>
  );
};

export default MyPage;
