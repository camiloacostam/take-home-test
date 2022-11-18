import { SectionContainer } from "./styled"
import advertisingImg from "../../../assets/images/advertisingImg.png"

export default function InformationSection() {
  return (
    <SectionContainer>
      <span>
        <p>WHY IT IS IMPORTANT</p>
        <h2>Knowing Your Online Ads Readiness Raiting...</h2>
        <p>
          ...will help you understand just how bullish you should be with your
          ad spend and where your blind spots are.
        </p>
        <p>
          When it comes to online advertising the more informed and ready you
          are, the more effective your advertising will be (and the greater your
          chances of a healthy Return on your Ad Spend (ROAS)).
        </p>
        <p>
          Find Out your Online Advertising Readiness Rating so you can make more
          money and avoid risks with your online advertising.
        </p>
      </span>
      <img src={advertisingImg} />
    </SectionContainer>
  )
}
