import styled from '@emotion/styled';
import bride from '@/assets/images/bride.png';
import groom from '@/assets/images/groom.png';

const People = () => {
  return (
    <div>
      <ImageWrapper>
      <ImageContainer>
          <MainImg src={bride} />
          <CaptionLeft>bride.<strong> 세령</strong></CaptionLeft>
        </ImageContainer>
        <ImageContainer>
          <MainImg src={groom} />
          <CaptionRight>groom.<strong> 준호</strong></CaptionRight>
        </ImageContainer>

      </ImageWrapper>
    </div>
  );
};

export default People;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  gap: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 기본 정렬 */
  width: 50%;
`;

const MainImg = styled.img`
  width: 100%;
  display: block;
`;

const CaptionLeft = styled.p`
  margin-top: 5px;
  text-align: left;
  width: 100%;
  font-size: 14px;
  font-family: "PT Serif", serif;
  font-style: italic;
      strong {

    font-family: 'Pretendard-Bold';
  }
`;

const CaptionRight = styled.p`
  margin-top: 5px;
  text-align: right;
  width: 100%;
  font-size: 14px;
  font-family: "PT Serif", serif;
  font-style: italic;
      strong {

    font-family: 'Pretendard-Bold';
  }
`;
