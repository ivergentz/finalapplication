import React from "react"
import styled from "styled-components"
import Download from "./Download"

const Cv = () => {
  return (
    <Wrapper>
      <h2>Lebenslauf</h2>
      <Download />
    </Wrapper>
  )
}

export default Cv

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background: var(--orange);
  padding: 8vh 3vh 3vh 3vh;

  h2 {
    padding: 0 0 5vh 0;
    text-transform: uppercase;
    text-decoration: underline;
    color: var(--red);
    background: var(--orange);
  }
`
