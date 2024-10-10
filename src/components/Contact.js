import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <h2>Kontakt</h2>
      <IconSection>
        <Icon>
          <p>Iver Gentz</p>
          <p>Große Freiheit 82</p>
          <p>22767 Hamburg</p>
        </Icon>
        <Icon>
          <a href='tel:+4915906593897'>⎕ +49 1590 6593897</a>
        </Icon>
        <Icon>
          <a href={"mailto: ivergentz@gmail.com"}>@ ivergentz@gmail.com</a>
        </Icon>
      </IconSection>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  max-width: 800px;
  padding-bottom: 3vw;

  h2 {
    padding: 0 0 5vh 0;
    text-transform: uppercase;
    text-decoration: underline double;
    background: none;
  }
`
const IconSection = styled.div`
  background: none;
  width: 90%;
  justify-content: space-between;
  align-items: end;
`
const Icon = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 2vh;
  background: none;

  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;
    background: none;
  }

  p {
    font-size: 1rem;
    background: none;
    text-transform: uppercase;
  }
`
