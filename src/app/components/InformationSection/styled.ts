import styled from "styled-components"

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  text-align: center;

  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.2em;
    text-align: start;
  }

  & h2 {
    font-weight: 800;
    font-size: 26px;
    line-height: 135%;
  }

  & span {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;

    & span {
      max-width: 50%;
    }
  }
`
