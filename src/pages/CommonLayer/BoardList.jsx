import styled from "styled-components";

const BoardContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #333;
  text-align: left;
  font-size: 40px;
  font-weight: 900;
  padding-bottom: 2rem;
`;

const TopPost = styled.div`
    display: flex;
    width: 1200px;
    color: black;
    height: 400px;
    margin-bottom: 2rem;
    box-shadow: 0px 3px 14px -5px #555555;
    border-radius: 40px;
`;

const TopPostImg = styled.div`
    width: 400px;
    background-color: lightgray;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 40px 0px 0px 40px;
    font-size: 30px;
    font-weight: bold;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopPostText = styled.div`
    
    width: 800px;
    border-radius: 0px 40px 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const TopPostTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 70px;
`;

const TopPostContent = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const PostListTop = styled.div`
    display: flex;
    font-size: 40px;
    font-weight: 900;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const Box = styled.div`
`;

const PostListTitle = styled.div`
`;

const PostSearchText = styled.input`
    height: 50px;
    width: 400px;
    background-color: lightgray;
    border-radius: 25px 0px 0px 25px;
    border: lightgray;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

const PostSearch = styled.div`
    display: flex;
`;

const PostListSearchBtn = styled.button`
    height: 50px;
    width: 80px;
    background-color: #D94D4D;
    border: none;
    border-radius: 0px 25px 25px 0px;
    font-size: 25px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Post = styled.div`
    margin-bottom: 2rem;
`;

const PostImg = styled.div`
    width: 380px;
    height: 450px;
    background-color: lightgray;
    margin-bottom: 8px;
    img{
        width: 100%;
        height: 100%;
    }
`;


const PostList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PostContentTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostContentTitle1 = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
    
`;

const PostContentTitle2 = styled.div`
    font-size: 20px;
    margin-bottom: 5px;
`;

const PostContentTitleInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PostContentTitle3 = styled.div`
    display: flex;
`;

const PostContentTitle4 = styled.div`
    
`;

const PostingBtn = styled.button`
    width: 200px;
    height: 60px;
    background-color: #D94D4D;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

const PostBottom = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const BoardList = () => {
    const toppost = [
        {title: "인기 게시글 1"},
        {title: "인기 게시글 2"},
        {title: "인기 게시글 3"},
        {title: "인기 게시글 4"},
        {title: "인기 게시글 5"},
    ]

    const post =[
        {
            title:"게시글 1", 
            num:"조회수", 
            nick:"작성자 1", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F1-1.jpg?alt=media&token=b26b39dc-8be3-4e7f-bbc7-6ad58ebdfb18",
        },
        {
            title:"게시글 2", 
            num:"조회수", 
            nick:"작성자 2", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F10-1.jpg?alt=media&token=e5375312-3be5-4f72-8768-7643883d35fa",
        },
        {
            title:"게시글 3", 
            num:"조회수", 
            nick:"작성자 3", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F11-1.jpg?alt=media&token=7b036666-b921-4133-a655-98992e1b8993",
        },
        {
            title:"게시글 4", 
            num:"조회수", 
            nick:"작성자 4", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F12-1.jpg?alt=media&token=88ed1f58-4328-48d9-b116-cb9243575aad",
        },
        {
            title:"게시글 5", 
            num:"조회수", 
            nick:"작성자 5", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F13-1.jpg?alt=media&token=2a178686-711e-41cd-94b5-90ac2313be74",
        },
        {
            title:"게시글 6", 
            num:"조회수", 
            nick:"작성자 6", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F14-1.jpg?alt=media&token=6b128d46-3d46-4f40-bccb-82b8efea14bc",
        },
        {
            title:"게시글 7", 
            num:"조회수", 
            nick:"작성자 7", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F15-1.jpg?alt=media&token=b33e5705-30bb-46f1-9526-2903110fcbd9",
        },
        {
            title:"게시글 8", 
            num:"조회수", 
            nick:"작성자 8", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F16-1.jpg?alt=media&token=76f79ba3-52d1-46be-90b0-31132ed03e06",
        },
        {
            title:"게시글 9", 
            num:"조회수", 
            nick:"작성자 9", 
            date:"작성일자", 
            image:"https://firebasestorage.googleapis.com/v0/b/matps-4d340.appspot.com/o/%EC%8B%9D%EB%8B%B9%20%EB%A6%AC%EB%B7%B0%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2F17-1.jpg?alt=media&token=05c1cf53-cf43-4df8-8c8e-4978deab2c5e",
        },
    ]
  return (
  <BoardContainer>
    <Box>
      <Title>게시판</Title>
      <Center>
        <TopPost>
            <TopPostImg>
                실시간 인기 게시글 이미지
            </TopPostImg>
            <TopPostText>
                <TopPostTitle>
                    실시간 인기 게시글
                </TopPostTitle>
                <ul style={{ listStyleType: 'decimal', fontSize: '25px'}}>
                    {toppost.map((toppost, index) => (  
                        <li key={index}>
                            <TopPostContent>{toppost.title}</TopPostContent>
                        </li>
                    ))}
                </ul>
            </TopPostText>
        </TopPost>
        
        <PostListTop>
            <PostListTitle>
                게시글 목록
            </PostListTitle>
                <PostSearch>
                    <PostSearchText placeholder="검색어를 입력하세요">
                    </PostSearchText>
                    <PostListSearchBtn>
                        검색
                    </PostListSearchBtn>
                </PostSearch>
        </PostListTop>
        <PostList>
        {post.map((post)=>(  
            <Post>
                <PostImg>
                    <img src={post.image}></img>
                </PostImg>
                <PostContentTitle>
                    <PostContentTitle1>
                        {post.title}
                    </PostContentTitle1>
                    <PostContentTitle2>
                        {post.nick}
                    </PostContentTitle2>
                    <PostContentTitleInfo>
                        <PostContentTitle3>
                            {post.date}
                        </PostContentTitle3>
                        <PostContentTitle4>
                            {post.num}
                        </PostContentTitle4>
                    </PostContentTitleInfo>
                </PostContentTitle>
         </Post>
         ) )}      
        </PostList>
        <PostBottom>
            <PostingBtn>
                글쓰기
            </PostingBtn>
        </PostBottom> 

      </Center>  
      </Box>
    </BoardContainer>
  )
};

export default BoardList;