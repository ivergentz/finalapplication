import React from "react"
import styled from "styled-components"
import Cards from "./Cards"

const CardWrapper = () => {
  return (
    <Wrapper>
      <Cards />
    </Wrapper>
  )
}

export default CardWrapper

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 100%;
  height: auto;
`
