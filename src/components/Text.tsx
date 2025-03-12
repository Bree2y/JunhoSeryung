import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: "PT Serif", serif;
  font-size: 1.2rem;
  margin: 40px 0 0 0;
  color: #000;
  white-space: pre-line;
  font-style: italic;
      font-weight: bold; /* 볼드체 */
`;


export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family:Pretendard-Bold;
  line-height: 1;
  margin: 3px;
  font-size:14px;
  color: #000;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 1.5rem;
  line-width: 1.8rem;
  white-space: pre-line;
  font-size:13px;
  color: rgb(102, 102, 102);
`;

export const Caption = styled.p<{ textAlign?: string }>`
  margin: 0;
  font-weight: 200;
  font-size:14px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
