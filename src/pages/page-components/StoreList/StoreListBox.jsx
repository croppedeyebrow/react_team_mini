import React, { useState, useEffect } from "react";
import {
  StoreListBox01,
  StoreItem,
  HeartIcon01,
  StorListInfo01,
  StoreType01,
  StoreNam01,
  StoreRaitingBox01,
  StroeRatingStar01,
  StroeRating01,
  StroeUpdate01,
  StoreContacInfo,
  StoreContac01,
  StoreAddr01,
  PaginationBox,
  CarouselBox,
} from "../../style-components/StoreList/StoreList-StoreListBox";
// import StoreListImg01 from "../../images/음식 테스트 이미지.jpg";
import HeartImg01 from "../../../images/heart.png";
import RatingStar01 from "../../../images/star.png";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../../../Api/AxiosApi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "react-js-pagination";

const StoreListBoxMap = () => {
  const [storesData, setStoresData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await AxiosApi.StoreListGet("storeIds");
        console.log(response);
        if (response.status === 200) {
          const processedData = response.data.map((store) => ({
            STORE_ID: store.storeId,
            STORE_IMG_01: store.storeImg01,
            STORE_IMG_02: store.storeImg02,
            STORE_IMG_03: store.storeImg03,
            STORE_IMG_04: store.storeImg04,
            STORE_IMG_05: store.storeImg05,
            STORE_TYPE: store.storeType,
            STORE_NAME: store.storeName,
            STORE_TEL: store.storeTel,
            STORE_ADDR: store.storeAddr,
          }));

          setStoresData(processedData);
          setLoading(false);
        }
      } catch (error) {
        console.error("식당 데이터를 불러오지 못함 : ", error);
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handlePageChange = (page) => {
    setPage(page);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = storesData.slice(startIndex, endIndex);

  return (
    <div>
      <StoreListBox01>
        {currentPageData.map((store) => (
          <Link to={`/StoreLayout/`} key={store.STORE_ID}>
            {/* <Link to={`/StoreLayout/${store.STORE_ID}`} key={store.STORE_ID}></Link> */}
            <StoreItem>
              <CarouselBox>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  selectedItem={1} // 필요한 대로 기본 선택된 항목을 설정
                  className="w-[400px] lg:hidden"
                >
                  {[
                    store.STORE_IMG_01,
                    store.STORE_IMG_02,
                    store.STORE_IMG_03,
                    store.STORE_IMG_04,
                    store.STORE_IMG_05,
                  ].map((imgUrl, index) => (
                    <div
                      key={index}
                      style={{
                        transform: "scale(1)",
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <img
                        alt={`이미지 ${index + 1}`}
                        src={imgUrl}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </CarouselBox>

              <HeartIcon01 alt="하트 이미지" src={HeartImg01} />
              <StorListInfo01>
                <StoreType01>{store.STORE_TYPE}</StoreType01>
                <StoreNam01>{store.STORE_NAME}</StoreNam01>

                <StoreRaitingBox01>
                  <StroeRatingStar01 alt="별표 이미지" src={RatingStar01} />
                  <StroeRating01>5.0</StroeRating01>
                </StoreRaitingBox01>

                <StroeUpdate01>2023.11.13</StroeUpdate01>
              </StorListInfo01>
              <StoreContacInfo>
                <StoreContac01>{store.STORE_TEL}</StoreContac01>
                <StoreAddr01>{store.STORE_ADDR}</StoreAddr01>
              </StoreContacInfo>
            </StoreItem>
          </Link>
        ))}

        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={storesData.length}
            pageRangeDisplayed={8}
            onChange={handlePageChange}
          ></Pagination>
        </PaginationBox>
      </StoreListBox01>
    </div>
  );
};

export default StoreListBoxMap;
