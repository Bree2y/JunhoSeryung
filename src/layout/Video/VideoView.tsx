import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import calenderImg from '@/assets/images/calender.png'; // 추가할 이미지
import mainVideo from '@/assets/videos/subVideo.mp4'; // 비디오 파일 추가

const Main = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const weddingDate = new Date('2025-03-29'); // 결혼식 날짜 설정
    const today = new Date();
    const timeDiff = weddingDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    setDaysLeft(daysRemaining);
  }, []);

  return (
    <div>
      <VideoWrapper>
        <MainVideo 
          src={mainVideo} 
          autoPlay 
          loop 
          muted 
          playsInline /* iOS에서도 인라인 자동 재생 가능 */
        />
      </VideoWrapper>

      <CalenderImg>
        <img src={calenderImg} alt="Calender Image" />
      </CalenderImg>

      <CountdownText>
        결혼식까지 <span>{daysLeft}일</span> 남았습니다 ♥
      </CountdownText>
    </div>
  );
};

export default Main;

// 스타일 정의
const VideoWrapper = styled.div`
  margin: 10px auto;
  width: 100%;
  max-width: 270px;
  display: flex;
  justify-content: center;
`;

const MainVideo = styled.video`
  width: 80%;
  pointer-events: none;
  user-select: none;
`;

const CalenderImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 150px;
  img {
    height: 100%;
  }
`;

const CountdownText = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 40px 0px 40px 0px;

    span {
    font-size:16px; /* 숫자 크기 키우기 */

    font-family: 'Pretendard-Bold';
  }

`;
