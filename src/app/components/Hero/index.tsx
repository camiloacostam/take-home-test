// Components
import Button from "../Button"
// styled components
import { HeroContainer, HeroContent, ImageContainer } from "./styled"
// Assets
import image from "../../../assets/images/banner.png"

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <p className="attentionText">Attention Online Advertisers</p>
        <h2>What’s Your Online Advertising Readiness Rating?</h2>
        <p>
          When you take this quiz, you’ll get a free report that outlines YOUR
          Readiness Rating.
        </p>
        <Button color="secondary">START QUIZ</Button>
        <p className="underlineText">Learn more about Readiness Raitings</p>
      </HeroContent>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
    </HeroContainer>
  )
}
