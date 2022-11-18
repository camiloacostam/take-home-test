import styled from "styled-components"

export const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const PostTextContainer = styled.div`
  background-color: white;
  padding: 30px 25px;
  border-radius: 8px;
  & p {
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
  }

  .author {
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const PostDate = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
`
