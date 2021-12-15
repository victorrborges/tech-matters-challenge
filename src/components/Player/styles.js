import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 5vh 5vw 5vh;
  min-height: 150px;
  width: 355px;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 15px;
  border: 2px solid #DFE3EB;
  padding: 6vh 50px 6vh;

  ${({ won }) => won && `
    border: 4px solid #0072BB;
  `}

  @media screen and (min-width: 587px) {
    &:after {
      content: "";
      flex: auto;
    }
  }

  @media screen and (max-width: 586px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 100%;
  margin: 1vh auto;
  display: flex;
  height: 40vh;
`;