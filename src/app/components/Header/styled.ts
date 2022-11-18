import styled from "styled-components"

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 100px;
    background-color: transparent;
    position: relative;
    margin-bottom: -106px;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }
`
