import styled from "styled-components"

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    max-width: 50%;
  }

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.defaultGray};

    & p {
      text-align: center;
      color: #000;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      max-width: 50%;
    }

    .logo {
      display: none;
    }
  }

  @media screen and (max-width: 720px) {
    .hidableText {
      display: none;
    }
  }
`
