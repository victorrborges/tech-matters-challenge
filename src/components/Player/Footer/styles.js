import styled from "styled-components";

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3vh;
`;

export const Label = styled.div`
  color: #374A5E;
  font-size: 25px;
  line-height: 24px;
  text-align: center;
  width: 100%;

  ${({ won }) => won && `
    color: #0072BB;
    font-weight: bold;
  `}
`