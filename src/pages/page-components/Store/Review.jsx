import {
  Container,
  ReviewTitle,
} from "../../style-components/Store/Store-Review";
import ReviewBox from "./ReviewBox";

const StoreReview = () => {
  return (
    <Container>
      <ReviewTitle>리뷰</ReviewTitle>
      <ReviewBox />
      <ReviewBox />
    </Container>
  );
};

export default StoreReview;
