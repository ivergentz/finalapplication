import React from "react"
import styled from "styled-components"
import Contact from "./Contact"
import Cv from "./Cv"
import Header from "./Header"
import ScrollButton from "./ScrollButton"
import Skills from "./Skills"
import Videoplayer from "./VideoPlayer"

const Components = () => {
  return (
    <Content>
      <Section>
        <Header />
      </Section>
      <VideoSection>
        <Videoplayer />
      </VideoSection>
      <Section>
        <Cv />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Contact />
      </Section>
      <ScrollButton />
    </Content>
  )
}

export default Components

const Content = styled.section`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Section = styled.section`
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`

const VideoSection = styled.section`
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`
