import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>(호텔 인터불고 엑스코와 다른 곳이오니 주소 확인 부탁드립니다)</Caption>
      <Map />
      
      <Address />
      <MapButtons />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
