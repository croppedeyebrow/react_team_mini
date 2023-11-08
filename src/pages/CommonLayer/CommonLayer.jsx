import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
// import BoardList from "../BoardList";
import Post from "./Post";
import Posting from "./Posting";





const ProjectLayer = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #666;
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 100%;
  position: relative;
  /* border: 3px solid #222; */
`;

const MainLayer = styled.div`
  border: 3px solid #666;
  padding-top: 1rem;
  width: 1280px;
  height: 100%;
`;

const Container = () => {
  return (
    <>
      <ProjectLayer>
        <ContainerStyle>
          <Header />
          <MainLayer>
            {/* <BoardList/> */}
            {/* <Post/> */}
            <Posting/>
          </MainLayer>
          <Footer />
        </ContainerStyle>
      </ProjectLayer>
    </>
  );
};

export default Container;
