// Styled components
import { SponsorsBadgeContainer } from "./styled"
// Img
import forbes from "../../../assets/images/forbesLogo.png"
import times from "../../../assets/images/timesLogo.png"
import telegraph from "../../../assets/images/telegraphLogo.png"
import guardian from "../../../assets/images/guardianLogo.png"
import usaToday from "../../../assets/images/usaTodayLogo.png"

export default function SponsorsBadge() {
  return (
    <SponsorsBadgeContainer>
      <img src={forbes} />
      <img src={times} />
      <img src={telegraph} />
      <img src={guardian} />
      <img src={usaToday} />
    </SponsorsBadgeContainer>
  )
}
