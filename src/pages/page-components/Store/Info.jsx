import { Container, StoreName, StoreDetail, Bar, WishList } from "../../style-components/Store/Store-Info";
import wish from '../../../images/heart.png';
import wish_wh from '../../../images/heart_wh.png';
import { useState, useRef } from "react";


const StoreInfo = ({ storeData }) => {
    const [wishImg, setWishImg] = useState(wish_wh);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClickheart = () => {
      if (isClicked) {
        setWishImg(wish_wh);
        setIsClicked(false);
        console.log("찜 취소");
      } else {
        setWishImg(wish);
        setIsClicked(true);
        console.log("찜 누름");
      }
    }
  
    return (
      <Container>
        <StoreName>{storeData.storeName}</StoreName>
        <StoreDetail>{storeData.storeView} view</StoreDetail>
        <StoreDetail>★★★★★({storeData.scoreAVG})</StoreDetail> /*여긴 생략*/
        <Bar></Bar>
        <StoreDetail>{storeData.storeTime}</StoreDetail>
        <StoreDetail>{storeData.storeAddr}</StoreDetail>
        <StoreDetail>{storeData.storeTel}</StoreDetail>
        <StoreDetail>음식 종류 : {storeData.storeType}</StoreDetail>
        <StoreDetail>주차 여부 : {storeData.storeParking ? "주차 가능" : "주차 불가"}</StoreDetail>
        <WishList onClick={handleClickheart}>
          <img src={wishImg} alt="withBtn" />
        </WishList>
      </Container>
    );
  };


export default StoreInfo;