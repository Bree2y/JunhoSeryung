import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>

    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  margin: 70px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  gap: 20px;
`;
