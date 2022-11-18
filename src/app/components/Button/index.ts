import styled from "styled-components"

interface IButtonProps {
  color?: "primary" | "secondary"
}

export default styled.button<IButtonProps>`
  padding: 10px 30px;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  background: ${({ theme, color }) =>
    color === "secondary" ? theme.colors.secondary : "#ffffff"};
  border: none;
  color: ${({ color }) => (color === "secondary" ? "#ffffff" : "#000")};
`
