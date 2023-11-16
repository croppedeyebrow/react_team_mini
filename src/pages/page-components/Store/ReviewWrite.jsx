import { UserProfileImg, ReviewWriteBox, Stars, TextArea, WriteBtn, SubmitButton, FileUploadContainer, StyledInput, UploadButton, UserImage } from "../../style-components/Store/Store-ReviewWrite";
import { Bar, ScrollBox, Profile, ProFileImg, ReviewNickname, ReviewTxt, ReviewArea, ReviewImgFlexBox, Images, ReviewFlex } from "../../style-components/Store/Store-ReviewBox";
import { useEffect ,useState, useNavigate, AxiosApi, storage } from "react";
import RatingSection from "../../page-components/Store/RatingSection";



const ReviewWrite = () => {
  const userId = window.localStorage.getItem("userId");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [nick, setNick] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [score, setScore] = useState("");
  const [reviewTxt, setReviewTxt] = useState("");
  
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  
  console.log("userId : " + userId);
  const navigate = useNavigate();

 const onClickWrite = async () => {
  console.log("리뷰 작성");

  const reviewWrite = await AxiosApi.reviewWrite(
    // STORE_ID,
    userProfileImg,
    nick,
    reviewDate,
    score,
    reviewTxt,
    file,
    url
  );

 }

  // 현재 날짜 설정
  const today = new Date();
  const formattedDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()}.`;

  // 별점
  // ratingIndex = 받을 평점
  const [ratingIndex, setRatingIndex] = useState(1);

  const handleContentChange = (e) => {
    setReviewTxt(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(nick, score, reviewTxt, url);
    try {
      const rsp = await AxiosApi.boardWrite(nick, score, reviewTxt, url);
      if (rsp.data === true) {
        alert("글쓰기 성공");
        navigate("/Review");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = async () => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      await fileRef.put(file);
      console.log("File uploaded successfully!");

      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);

      setUrl(url);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };


  return (
        <>
          <Bar/>
          <ReviewFlex>
              <Profile>
                  <UserProfileImg
                  style={{backgroundImage: `url("${userProfileImg}")`}}/>
                  <ReviewNickname>{nick}</ReviewNickname>
              </Profile>
              <ReviewArea>
                  <ReviewTxt>{formattedDate}</ReviewTxt>
            
                  <RatingSection
                    ratingIndex={ratingIndex}
                    setRatingIndex={setRatingIndex}
                  />
                  <TextArea>
                    <label htmlFor="content">
                      <textarea className="textarea" name="content" id="content" cols="30" rows="10" placeholder="후기를 작성해주세요" onChange={handleContentChange}></textarea>
                    </label>
                  </TextArea>
                
                  <FileUploadContainer>
                    <StyledInput type="file" onChange={handleFileInputChange} />
                    <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
                  </FileUploadContainer>

                  {url && <UserImage src={url} alt="uploaded" />}

                  <ScrollBox className="scrollStyle">
                      <ReviewImgFlexBox>
                          <Images
                          style={{backgroundImage: `url("${url}")`}}></Images>
                      </ReviewImgFlexBox>
                  </ScrollBox>

               
                  <WriteBtn onClick={handleSubmit}>글쓰기</WriteBtn>
                  

              </ReviewArea>
          </ReviewFlex>
        </> 
  );
}

export default ReviewWrite;