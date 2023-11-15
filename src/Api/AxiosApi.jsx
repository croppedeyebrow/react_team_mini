import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    // 회원 로그인을 위한 함수
    const login = {
      // 로그인 정보를 담은 객체를 생성
      id: id, // 사용자 아이디를 설정
      pwd: pw, // 사용자 비밀번호를 설정
    };

    return await axios.post(KH_DOMAIN + "/users/login", login); // 로그인 API에 POST 요청
  },
  //회원 조회
  memberGet: async (id) => {
    // 회원 정보 조회를 위한 함수
    return await axios.get(KH_DOMAIN + `/users/member/?id=${id}`); //회원 조회 API에 GET 요청
  },

  // 회원 가입
  memberReg: async (id, pw, name, nick, mail, gender) => {
    // 회원 가입을 위한 함수
    const sign = {
      // 회원 정보를 담은 객체를 생성 .
      id: id, // 사용자 아이디를 설정
      pwd: pw, // 사용자 비밀번호를 설정
      name: name, // 사용자 이름을 설정
      nick: nick, // 사용자 닉네임을 설정
      mail: mail, // 사용자 이메일을 설정
      gender: gender, // 사용자 성별을 설정
    };
    return await axios.post(KH_DOMAIN + "/users/sign", sign); // 회원 가입 API에 POST 요청
  },
  
  // 회원 정보 수정
  memberUpd: async (id, nick, profile_img) => {
    console.log("AxiosApi.memberUpd 입력결과 : ", id, nick, profile_img);
    // 회원 가입을 위한 함수
    const update = {
      // 회원 정보를 담은 객체를 생성 .
      id: id, // 사용자 아이디를 설정
      nick: nick, // 사용자 닉네임을 설정
      profile_img: profile_img // 사용자 프로필 이미지를 설정
    };
    return await axios.post(KH_DOMAIN + "/users/update", update); // 회원 가입 API에 POST 요청
  },

  // 아이디 중복여부 확인
  memberRegCheckId: async (id) => {
    // 회원 가입 여부를 확인하기 위한 함수
    return await axios.get(KH_DOMAIN + `/users/checkId?id=${id}`); // 아이디 중복여부 확인 API 에 POST 요청
  },
// 닉네임 중복여부 확인
  memberRegCheckNick: async (nick) => {
    // 회원 가입 여부를 확인하기 위한 함수
    return await axios.get(KH_DOMAIN + `/users/checkNick?nick=${nick}`); // 회원 가입 여부 확인 API에 POST 요청
  },
  // 회원 탈퇴
  memberDel: async (id) => {
    // 회원 탈퇴를 위한 함수
    const del = {
      // 탈퇴를 위한 정보를 담은 객체를 생성
      id: id, // 사용자 아이디를 설정
    };
    return await axios.post(KH_DOMAIN + "/users/del", del); // 회원 탈퇴 API에 POST 요청
  },
//식당 리스트
StoreListGet: async (STORE_ID) => {
  return await axios.get(
    KH_DOMAIN + `/stores/StoreInfo/?storeIds=${STORE_ID}`
  );
},

// STORE ////////////////////////////////////////////////////////////////////////////
// Store Info
storeInfo: async (STORE_ID) => {
  return await axios.get(
    KH_DOMAIN + `/detail/StoreDetailInfo/?storeId=${STORE_ID}`);
},

// Store Map


// Store Menu
storeMenu: async (STORE_ID) => {
  return await axios.get(
    KH_DOMAIN + `/detail/menu/?storeId=${STORE_ID}`);
},

// Store Review
storeReview: async (STORE_ID) => {
  return await axios.get(
    KH_DOMAIN + `/detail/review/?storeId=${STORE_ID}`);
},

// Store ReviewWrite
storeReviewWrite: async (STORE_ID, userProfileImg, nick, reviewDate, score, reviewTxt, reviewImg01, reviewImg02, reviewImg03, reviewImg04, reviewImg05 ) => {
  
  const Review = {
    storeId: STORE_ID,
    userProfileImg: userProfileImg,
    nick: nick,
    reviewDate: reviewDate,
    score: score,
    reviewTxt: reviewTxt,
    reviewImg01: reviewImg01,
    reviewImg02: reviewImg02,
    reviewImg03: reviewImg03,
    reviewImg04: reviewImg04,
    reviewImg05: reviewImg05,
  };
  return await axios.post(KH_DOMAIN + `/reviewWrite`, Review); 
},

// Store Post
storePost: async (STORE_ID) => {
  return await axios.get(
    KH_DOMAIN + `/detail/Post/?storeId=${STORE_ID}`);
},

// Store Reserve
storeReserve: async (storeId, reserveDate, reserveTime, person, clientName, clientTel, clientEmail, clientWish ) => {
  const Reserve = {
    storeId: storeId,
    reserveDate: reserveDate,
    reserveTime: reserveTime,
    person: person,

    clientName: clientName,
    clientTel: clientTel,
    clientEmail: clientEmail,
    clientWish: clientWish,
  };
  return await axios.post(KH_DOMAIN + `/StoreReserve`, Reserve);
}


};

export default AxiosApi; // AxiosApi 객체를 모듈로 내보냄
