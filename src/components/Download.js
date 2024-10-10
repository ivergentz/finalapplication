import React from "react"
import styled from "styled-components"

const Download = () => {
  return (
    <Wrapper>
      <Button
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/1MKThvqhcCzlyEioZdb_-cPHvfN_jmVuy/view?usp=sharing",
            "_blank"
          )
        }}
      >
        ▼ Lebenslauf ▼
      </Button>
      <Button
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/13hsw6wcqAuCOvhzjlo3YGbcJDMeU1TdX/view?usp=drive_link",
            "_blank"
          )
        }}
      >
        ▼ Zeugnisse Arbeit ▼
      </Button>
      <Button
        onClick={(e) => {
          window.open(
            "https://drive.google.com/file/d/1SYc9lEaAV1DMJD-vQQXDDpOlYSCBtC67/view?usp=drive_link",
            "_blank"
          )
        }}
      >
        ▼ Zeugnisse Hochschule ▼
      </Button>
    </Wrapper>
  )
}

export default Download

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  max-width: 800px;
  color: rgb(208, 45, 38);
`
const Button = styled.button`
  margin-bottom: 3vh;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  color: rgb(208, 45, 38);

  &.active {
    font-weight: bold;
    font-size: 400px;
  }
`
