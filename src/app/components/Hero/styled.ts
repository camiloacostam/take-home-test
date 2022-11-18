import styled from "styled-components"

export const HeroContainer = styled.div`
  position: relative;

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.primary};
  }
`
export const ImageContainer = styled.div`
  height: 515px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 720px) {
    flex: 1;
    height: 770px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export const HeroContent = styled.div`
  position: absolute;
  top: 51px;
  left: 26px;
  right: 26px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 30px 26px;
  text-align: center;

  .attentionText {
    visibility: hidden;
  }

  @media screen and (min-width: 720px) {
    position: static;
    padding-top: 144px;
    padding-left: 100px;
    padding-right: 100px;
    flex: 1;
    text-align: start;

    .attentionText {
      visibility: visible;
    }
  }

  & h2,
  & p,
  & button {
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 28px;
    font-weight: 800;
    line-height: 38px;
    letter-spacing: 0em;
  }

  & p {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
  }

  & button {
    font-size: 28px;
    line-height: 33px;
  }

  .underlineText {
    font-weight: 600;
    font-size: 14px;
    line-height: 170%;
    text-decoration-line: underline;
  }

  @media screen and (min-width: 720px) {
    & h2 {
      font-size: 50px;
      font-weight: 900;
      line-height: 123.5%;
    }

    & p {
      font-weight: 500;
      font-size: 20px;
      line-height: 170%;
    }

    & button {
      font-size: 38px;
      line-height: 33px;
    }

    .underlineText {
      font-weight: 500;
      font-size: 20px;
      line-height: 170%;
      text-decoration-line: none;
    }
  }
`
