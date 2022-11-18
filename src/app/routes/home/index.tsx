// Components
import { useEffect } from "react"
//Styled
import styled from "styled-components"
//Components
import FooterContainer from "../../components/Footer"
import { Header } from "../../components/Header"
import Hero from "../../components/Hero"
import InformationSection from "../../components/InformationSection"
import SponsorsBadge from "../../components/SponsorsBage"
import PostsList from "../../components/PostsList"
// styles

export function HomePage() {
  return (
    <PageContainer>
      <Header />
      <Hero />
      <section>
        <SponsorsBadge />
        <PostsList
          postsUrl="http://api.massrelevance.com/MassRelDemo/kindle.json"
          listSize={3}
          updateInterval={10000}
        />
        <InformationSection />
      </section>
      <FooterContainer />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  margin: 0 auto;

  & section {
    max-width: 1200px;
    margin: 0 auto;
  }
`
