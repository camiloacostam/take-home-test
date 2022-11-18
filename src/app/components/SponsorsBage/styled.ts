import styled from "styled-components"

export const SponsorsBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  & img {
    opacity: 0.5;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`
