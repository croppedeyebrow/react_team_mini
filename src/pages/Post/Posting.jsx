import styled from "styled-components";
import gallery from "../../images/image.png";
import video from "../../images/video (1).png";
import location from "../../images/placeholder.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";
import App from "../Editor";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../../style-component/Global_style";

const Posting = () => {
  const Posting1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 170px;
    margin-right: 10px;
    margin-left: 5px;
  `;

  const Posting2 = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const PostingContainer = styled.div`
    height: 1000px;
    display: flex;
  `;

  const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 1rem;
  `;

  const TitlePosting = styled.input`
    width: 1190px;
    height: 80px;
    font-size: 40px;
    border-radius: 20px;
    margin-bottom: 1rem;
  `;

  const PostingBottom = styled.div`
    width: 1190px;
    display: flex;
    justify-content: end;
  `;

  const PostingBtn = styled.button`
    width: 150px;
    height: 60px;
    border-radius: 30px;
    border: none;
    font-size: 25px;
    font-weight: bold;
    margin-right: 20px;
    box-shadow: 0px 3px 14px -5px #555555;
  `;

  const PostingImg = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 15px;
    margin-bottom: 1rem;
  `;

  const ImgIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 5px;
  `;

  const PostingVid = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 15px;
    margin-bottom: 1rem;
  `;

  const VidIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 3px;
  `;
  const PostingLoc = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 15px;
  `;

  const LocIcon = styled.img`
    width: 40px;
    height: 40px;
  `;

  return (
    <>
      <GlobalStyle />
      <PostingContainer>
        <Posting1>
          <PostingImg>
            <ImgIcon alt="사진 아이콘" src={gallery}></ImgIcon>
          </PostingImg>
          <PostingVid>
            <VidIcon alt="동영상 아이콘" src={video}></VidIcon>
          </PostingVid>
          <PostingLoc>
            <LocIcon alt="위치 아이콘" src={location}></LocIcon>
          </PostingLoc>
        </Posting1>
        <Posting2>
          <Title>게시판 글쓰기</Title>
          <TitlePosting placeholder="제목을 입력하세요"></TitlePosting>
          <div>
            <App></App>
          </div>
          <PostingBottom>
            <PostingBtn>등록</PostingBtn>
          </PostingBottom>
        </Posting2>
      </PostingContainer>
    </>
  );
};

export default Posting;
