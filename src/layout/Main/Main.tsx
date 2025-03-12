import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/main.png';
import subImg from '@/assets/images/sub title.png';
import mainVideo from '@/assets/videos/mainVideo.mp4'; // 비디오 파일 추가
import subImg2 from '@/assets/images/sub title2.png'; // 추가할 이미지
const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <ImageWrapper>
        <MainImg src={mainImg} />
      </ImageWrapper>
      <MainTitle><SubImg src={subImg} /></MainTitle>
      <VideoWrapper>
        <MainVideo 
          src={mainVideo} 
          autoPlay 
          loop 
          muted 
          playsInline /* iOS에서도 인라인 자동 재생 가능 */
        />
      </VideoWrapper>
      <SubTitle2>
        <img src={subImg2} alt="Subtitle2 Image" />
      </SubTitle2>
      <SubTitle dangerouslySetInnerHTML={{ __html: greeting.eventDetail }} />

    </div>
  );
};

export default Main;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

const MainImg = styled.img`
  width: 100%;
  display: block;
`;

const SubImg = styled.img`
  height: 100%;
  display: block;
`;

const MainTitle = styled.div`
  margin  : 100px 0 0 0;
  position: relative;
  height: 60px;
  display: inline-block;
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 270px;
  
  display: flex;
  justify-content: center;
`;

const MainVideo = styled.video`
  width: 90%;
    
  pointer-events: none; /* 마우스 이벤트 차단 (클릭, 재생 버튼 등) */
  user-select: none; /* 텍스트 선택 방지 */
`;

const SubTitle = styled.p`
  font-size: 0.9rem;
  color: rgb(102, 102, 102);
  line-height: 140%;
  white-space: pre-line;
  
  strong {
    font-weight: 700;
    font-family: 'Pretendard-Bold', sans-serif; /* ✅ strong 내부에도 폰트 적용 */
  }
`;
const SubTitle2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width:100%;
  height:106px;
  img {
    height: 100%;
    
  }
`;