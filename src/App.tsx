import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import VideoView from '@/layout/Video/VideoView.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import styled from '@emotion/styled';
import People from './layout/people/people';

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
<Container>
          <Main />
        <Wrapper>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <People/>
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>GALLERY</Heading1>
          <Hr/>
          <GalleryWrap />
        </Wrapper>
        <Wrapper>
          <Heading1>VIDEO</Heading1>
          <VideoView />
        </Wrapper>
        <Wrapper>
          <Heading1>LOCATION</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
        <Heading1>FOR YOUR HEART</Heading1>
          마음 전하실 곳
          <Account />
        </Wrapper>
        <Wrapper> 
          신랑 신부에게
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />

        </Container>
    </NavermapsProvider>
  );
}

export default App;

const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #99858a;
  margin: 10px 0;
`;