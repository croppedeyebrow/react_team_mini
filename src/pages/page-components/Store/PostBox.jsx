import { FlexBox, PostImg, PostItem } from "../../style-components/Store/Store-PostBox";
import AxiosApi from "../../../Api/AxiosApi";
import { useState, useEffect } from "react";

const PostBox = () => {

    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await AxiosApi.get('storePost');
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
            }
        };
        fetchPost();
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <FlexBox>
                <PostImg
                style={{backgroundImage: `url("${post.postImg01}")`}}
                ></PostImg>
                <PostItem>{post.postTitle}</PostItem>
            </FlexBox>
        </>
    );
};

export default PostBox;