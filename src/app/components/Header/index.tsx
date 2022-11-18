import { Logo } from "../../../assets/icons/logo"
import Button from "../Button"
import { StyledNav } from "./styled"

export function Header() {
  return (
    <header>
      <StyledNav>
        <Logo />
        <Button>START QUIZ</Button>
      </StyledNav>
    </header>
  )
}
