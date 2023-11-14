import { UserProfileImg, ReviewWriteBox, Stars, TextArea, WriteBtn } from "../../style-components/Store/Store-ReviewWrite";
import { Bar, ScrollBox, Profile, ProFileImg, ReviewNickname, ReviewTxt, ReviewArea, ReviewImgFlexBox, Images, ReviewFlex } from "../../style-components/Store/Store-ReviewBox";
import { useState } from "react";
import RatingSection from "../../page-components/Store/RatingSection";



const ReviewWrite = () => {

  // 현재 날짜 설정
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}.`;

  // 별점
  // ratingIndex = 받을 평점
  const [ratingIndex, setRatingIndex] = useState(1);

  return (
        <>
          <Bar/>
          <ReviewFlex>
              <Profile>
                  <UserProfileImg/>
                  <ReviewNickname>닉네임</ReviewNickname>
              </Profile>
              <ReviewArea>
                  <ReviewTxt>{formattedDate}</ReviewTxt>
            
                  <RatingSection
                    ratingIndex={ratingIndex}
                    setRatingIndex={setRatingIndex}
                  />
                  <TextArea>
                    <textarea className="textarea" name="" id="" cols="30" rows="10" placeholder="후기를 작성해주세요"></textarea>
                  </TextArea>
                
                  
                  <ScrollBox className="scrollStyle">
                      <ReviewImgFlexBox>
                          <Images></Images>
                          <Images></Images>
                          <Images></Images>
                          <Images></Images>
                      </ReviewImgFlexBox>
                  </ScrollBox>

                  <WriteBtn>작성 완료</WriteBtn>
              </ReviewArea>
          </ReviewFlex>
        </> 
  );
}

export default ReviewWrite;