import styled from "styled-components"

export const PostsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 30px 40px;
  gap: 60px;
  display: flex;
  flex-direction: column;
`
