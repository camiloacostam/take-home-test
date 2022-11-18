import { Footer } from "./styled"
import { Logo } from "../../../assets/icons/logo"

export default function FooterContainer() {
  return (
    <Footer>
      <Logo className="logo" />
      <p>©2019 Tidal Traffic. All rights reserved.</p>
      <p className="hidableText">©2019 Tidal Traffic. All rights reserved.</p>
      <p className="hidableText">
        About Us | Terms of Service | Privacy Policy
      </p>
    </Footer>
  )
}
