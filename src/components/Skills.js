import React from "react"
import styled from "styled-components"
import CardWrapper from "../cards/CardWrapper"

const Skills = () => {
  return (
    <Wrapper>
      <h2>Fähigkeiten</h2>
      <CardWrapper />
    </Wrapper>
  )
}

export default Skills

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 800px;

  h2 {
    padding: 0 0 5vh 0;
    text-transform: uppercase;
    text-decoration: underline double;
  }
`
