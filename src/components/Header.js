import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"

const Header = () => {
  const reloadPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <HeaderSection>
      <Logo src={logo} alt='' onClick={reloadPage} />
      <TextSection>
        <Name>Iver Gentz</Name>
        <Subtitle>Produkt - Projekt - Marketing</Subtitle>
        <Manager>Head of - Team Lead</Manager>
      </TextSection>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.section`
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 3vh 0 3vh 0;
  z-index: 10;
  border-bottom: 0.5px solid var(--red);
  box-shadow: 5px 5px 10px 2px rgb(0 0 0 / 0);
`

const Logo = styled.img`
  width: 35vw;
  max-width: 150px;
  position: absolute;
  left: 0;
  cursor: pointer;
  background: none;
`

const TextSection = styled.div`
  margin-left: 19vw;
`

const Name = styled.h1`
  font-weight: bold;
  color: var(--orange);
  font-size: 1rem;
  text-transform: uppercase;
`
const Subtitle = styled.p`
  color: var(--blue);
`
const Manager = styled.p`
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--orange);
`
