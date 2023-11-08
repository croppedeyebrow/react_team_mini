import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SimpleSlider = () => {
    
    const navigate = useNavigate();
    
    const settings = {
        infinite: true, // 무한 캐러셀
        speed: 500, // 다음 컨텐츠 까지의 속도
        slidesToShow: 3, // 화면에 보이는 컨텐츠 수
        slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
        centerMode: true, // 현재 컨텐츠 가운데 정렬
        centerPadding: '10px', // 중앙 컨텐츠 padding 값
        draggable: false, // 드래그      
        fade: false, // 사라졌다 나타나는 효과
        arrows: true, // 좌,우 버튼
        vertical: false, // 세로 캐러셀
        initialSlide: 1, // 첫 컨텐츠 번호
        pauseOnFocus: true, // focus시 정지
        pauseOnHover: true, // hover시 정지
        responsive: [ // 반응형 옵션 
            {
                breakpoint: 480, // (숫자)px 이하일 경우
                settings: {
                slidesToShow: 1,
                arrows:true,
                }
        }
    ]
    };

const MorePost = styled.div`
    font-size: 40px;
    margin-bottom: 2rem;
    font-weight: bold;
`;

const MorePost1 = styled.div`
    width: 350px;
    height: 450px;
    box-sizing: border-box;
    img {
        width: 348px;
        height: 450px;
    }
`;

const MorePost2 = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    height: 100px;
    border-radius: 20px 20px 0px 0px;
    background-color: lightgray;
    justify-content: space-between;
`;

const MorePost3 = styled.div`
    width: 350px;
    height: 100px;
    border-radius: 0px 0px 20px 20px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SliderContainer = styled.div`
`;

const PostMore = styled.div`
    display: flex;
    flex-direction: column;
    .slick-prev {
        left: 50px;
        z-index: 1;
    }
    .slick-next {
        right: 120px;
        z-index: 1;
    }

    .slick-next:before {
        font-size: 100px;
        color: black;
    }
    .slick-prev:before {
        font-size: 100px;
        color: black;
    }
`;

const MoreProfile = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    margin-right: 1rem;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50px;
    }
`;

const MoreStore = styled.div`
    margin-left: 1rem;
    font-size: 30px;
`

const MoreScore = styled.div`
    margin-left: 1rem;
    font-size: 20px;
`

const MoreInfo = styled.div`
    margin-left: 1rem;
    font-size: 20px;
`

const MoreName = styled.div`
    font-size: 30px;
    margin-right: 1rem;
    font-weight: bold;
`;

const MoreDate = styled.div`
    font-size: 20px;
`;

const MoreLeft = styled.div`
    display: flex;
    align-items: center;
`;

    return (
        <PostMore>
            <MorePost>게시글 더보기</MorePost>
            <SliderContainer>
            <Slider {...settings}>
                <div>
                    <MorePost2>
                        <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-8.png?alt=media&token=b5ddabc3-92bb-4fcf-8576-17446f7a21fc"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 1
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F1-2.jpg?alt=media&token=0e909ff9-6385-4845-be3e-70a44c516da2"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                            상호명
                        </MoreStore>
                        <MoreScore>
                            별점
                        </MoreScore>
                        <MoreInfo>
                            지역 - 음식 종류
                        </MoreInfo>
                    </MorePost3>
                </div>
                <div>
                    <MorePost2>
                    <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-9.png?alt=media&token=c724169e-f8b6-4f31-8e80-0c2ff5d93cbc"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 2
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F10-2.jpg?alt=media&token=a42c0933-b761-47f3-8f88-c7ce3392361c"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                                상호명
                            </MoreStore>
                            <MoreScore>
                                별점
                            </MoreScore>
                            <MoreInfo>
                                지역 - 음식 종류
                            </MoreInfo>
                    </MorePost3>
                </div>
                <div>
                    <MorePost2>
                    <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-7.jpg?alt=media&token=aacd8be5-a726-4ab7-887e-7ced869de000"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 3
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F13-3.jpg?alt=media&token=069ed4f0-1111-4671-8ee1-eb4f6fb1a42b"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                                상호명
                            </MoreStore>
                            <MoreScore>
                                별점
                            </MoreScore>
                            <MoreInfo>
                                지역 - 음식 종류
                            </MoreInfo>
                    </MorePost3>
                </div>
                <div>
                    <MorePost2>
                    <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-5.jpg?alt=media&token=e35aeadf-2565-44cc-8c80-ca408afe8e89"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 4
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F16-3.jpg?alt=media&token=6f475261-52f5-46bf-a41d-bc3d4954bd52"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                                상호명
                            </MoreStore>
                            <MoreScore>
                                별점
                            </MoreScore>
                            <MoreInfo>
                                지역 - 음식 종류
                            </MoreInfo>
                    </MorePost3>
                </div>
                <div>
                    <MorePost2>
                    <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-4.jpg?alt=media&token=d10eee14-3897-4819-9c7f-cc8ffcb86062"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 5
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F18-2.jpg?alt=media&token=0623095c-7aac-45a7-b262-2788478ab32a"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                                상호명
                            </MoreStore>
                            <MoreScore>
                                별점
                            </MoreScore>
                            <MoreInfo>
                                지역 - 음식 종류
                            </MoreInfo>
                    </MorePost3>
                </div>
                <div>
                    <MorePost2>
                    <MoreLeft>
                            <MoreProfile>
                                <img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%9C%A0%EC%A0%80%20%ED%94%84%EB%A1%9C%ED%95%84%2FUSER-3.jpg?alt=media&token=9f963a81-9df5-4ca3-8713-850d4422d36a"/>
                            </MoreProfile>
                            <MoreName>
                                사용자 6
                            </MoreName>
                        </MoreLeft>
                        <MoreDate>
                            최근 방문일
                        </MoreDate>
                    </MorePost2>
                    <MorePost1><img src="https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F19-4.jpg?alt=media&token=943d1f38-a22e-4f7a-af87-e52536394af5"/></MorePost1>
                    <MorePost3>
                        <MoreStore>
                                상호명
                            </MoreStore>
                            <MoreScore>
                                별점
                            </MoreScore>
                            <MoreInfo>
                                지역 - 음식 종류
                            </MoreInfo>
                    </MorePost3>
                </div>
            </Slider>
            </SliderContainer>
        </PostMore>
    );
}

export default SimpleSlider;

