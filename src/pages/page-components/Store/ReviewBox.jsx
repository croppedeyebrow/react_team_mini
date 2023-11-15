import AxiosApi from "../../../Api/AxiosApi";
import {Bar, ScrollBox, Profile, ProFileImg, ReviewNickname, ReviewTxt, ReviewArea, ReviewImgFlexBox, Images, ReviewFlex} from "../../style-components/Store/Store-ReviewBox";
import { useState, useEffect } from "react";
import axios from "axios";


const ReviewBox = () => {

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await AxiosApi.get('storeReview');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
            }
        };

        fetchReviews();
    }, []);

    if (error) return <div>Error: {error.message}</div>;


    return(
        <>
        <Bar/>
            <ReviewFlex>
                {reviews.map(review => (
                    <div key={review.id}>
                        <Profile>
                            <ProFileImg
                            style={{backgroundImage: `url("${review.userProfileImg}")`}}/>
                            <ReviewNickname>{review.Nickname}</ReviewNickname>
                        </Profile>
                        <ReviewArea>
                            <ReviewTxt>{review.date}</ReviewTxt>
                            <ReviewTxt>*****</ReviewTxt>
                            <ReviewTxt>{review.comment}</ReviewTxt>
                            <ScrollBox className="scrollStyle">
                                <ReviewImgFlexBox>
                                    {Array.isArray(review.images) && review.images.map(image => (
                                        <Images key={image.id} src={image.url} />
                                    ))}
                                </ReviewImgFlexBox>
                            </ScrollBox>
                        </ReviewArea>
                    </div>
                ))}
            </ReviewFlex>
        </> 

    );
};

export default ReviewBox;