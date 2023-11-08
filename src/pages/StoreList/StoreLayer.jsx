import styled from "styled-components";
import React from "react";
import StoreListImg01 from "../images/음식 테스트 이미지.jpg";
import HeartImg01 from "../images/HearIcon.png";
import RatingStar01 from "../images/star.png";

const CenterLayer = styled.div`
  display: flex;
  /* border: 3px solid #666; */
  /* background-color: #f0e9e9; */
  padding-top: 1rem;
  width: 1280px;
  height: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 2rem;
  width: 260px;
  height: 2000px;
  border-radius: 14px;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 2px 2px;
  border: 2px solid #222;
  row-gap: 2rem;
`;

const FilterBox01 = styled.div`
  width: 202px;
  height: 167px;
  border-radius: 14px;
  box-shadow: 2px 2px;
  border: 2px solid #222;
`;

const PeopleNum = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const FilterBox02 = styled.div`
  width: 202px;
  height: 343px;
  border-radius: 14px;
  box-shadow: 2px 2px;
  border: 2px solid #222;
`;

const FoodCheck = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const FilterBox03 = styled.div`
  width: 202px;
  height: 120px;
  border-radius: 14px;
  box-shadow: 2px 2px;
  border: 2px solid #222;
`;

const RegionCheck = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const FilterBox04 = styled.div`
  width: 202px;
  height: 210px;
  border-radius: 14px;
  box-shadow: 2px 2px;
  border: 2px solid #222;
`;

const PriceCheck = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const FilterBox05 = styled.div`
  width: 202px;
  height: 122px;
  border-radius: 14px;
  box-shadow: 2px 2px;
  border: 2px solid #222;
`;

const ParkingCheck = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const ListMain = styled.div`
  width: 1000px;
  height: 2000px;
  border: 4px solid #666;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoreMainMap = styled.div`
  display: flex;
  width: 955px;
  height: 484px;
  border: 2px solid red;
  border-radius: 14px;
  box-shadow: 2px 2px;
  align-self: center;
  margin-top: 1rem;
`;

const CenterWord = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 50px;
  border: 4px solid red;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  box-shadow: 1px 1px;
  margin: 1rem 1rem;
`;

const StyledScreen = styled.div`
  background-color: #ffffff;
  display: flex;
  margin-top: 2rem; /* 간격을 추가함 */
  width: 100%;
  align-self: center;
  justify-content: center;
`;

const StoreListScreen = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 1000px;
  height: 1400px;
  border: 1px solid red;
`;

const StoreListBox01 = styled.div`
  width: 955px;
  height: 200px;
  border-radius: 1rem;
  border: 1px solid #ecd0d0;
  box-shadow: 1px 1px;
  display: flex;
  flex-direction: row;
`;

const StoreListImgBox01 = styled.img`
  width: 255px;
  height: 200px;
  /* background-color: #666; */
  margin-left: 33px;
  border: 1px solid #666;
`;

const HeartIcon01 = styled.img`
  height: 30px;
  left: 585px;
  object-fit: cover;
  position: relative;
  top: 39px;
  width: 30px;
  box-shadow: 1px 1px;
`;

const StoreType01 = styled.div`
  width: 528px;
  height: 24px;
  display: flex;
  font-size: 20px;
`;

const StoreNam01 = styled.div`
  width: 394px;
  height: 47px;
  font-size: 40px;
  display: flex;
`;

const StroeRatingStar01 = styled.img`
  width: 24px;
  height: 24px;
`;

// const StroeRating01 = styled.div`

// `;

const StoreLayer = () => {
  return (
    <CenterLayer>
      <FilterContainer>
        <FilterBox01>
          <PeopleNum>인원수</PeopleNum>
        </FilterBox01>

        <FilterBox02>
          <FoodCheck>음식</FoodCheck>
        </FilterBox02>

        <FilterBox03>
          <RegionCheck>지역</RegionCheck>
        </FilterBox03>

        <FilterBox04>
          <PriceCheck>가격대</PriceCheck>
        </FilterBox04>

        <FilterBox05>
          <ParkingCheck>주차</ParkingCheck>
        </FilterBox05>
      </FilterContainer>

      <ListMain>
        <StoreMainMap>여기는 카카오 api 지도 넣을 자리입니다~~</StoreMainMap>

        <StyledScreen>
          <CenterWord>
            당신이 고대하던 소중한 ____자리를 위한 식당을 찾고 있습니다.
          </CenterWord>
        </StyledScreen>

        <StoreListScreen>
          <StoreListBox01>
            <StoreListImgBox01 alt="첫째줄 이미지" src={StoreListImg01} />
            <HeartIcon01 alt="첫번째 하트 이미지" src={HeartImg01} />
            <StoreType01></StoreType01>
            <StoreNam01></StoreNam01>
            <StroeRatingStar01 alt="첫번째 별표 이미지" src={RatingStar01} />
            {/* <StroeRating01></StroeRating01>
            <StroeUpdate01></StroeUpdate01>
            <StoreContac01></StoreContac01> */}
          </StoreListBox01>
        </StoreListScreen>
      </ListMain>
    </CenterLayer>
  );
};

export default StoreLayer;
