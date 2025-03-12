import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 0.5em 1em;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #44484d;
  text-decoration: none;
  background-color: #fff;
  border-radius: 4px; /* ✅ 문자열 제거 */
  border: 1px solid #dfdfdf; /* ✅ 문자열 제거 */
`.withComponent('a');

export default RoundButton;
