import React from "react"
import styled from "styled-components"
import cardcontent from "./cardcontent"

const CardWrapper = () => {
  return (
    <Wrapper>
      {cardcontent.map(function (card) {
        return (
          <Card key={card.id}>
            <Header>{card.title}</Header>
            <Text>{card.text}</Text>
          </Card>
        )
      })}
    </Wrapper>
  )
}

export default CardWrapper

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh;
  padding-bottom: 0;
  background: var(--red);
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--orange);
  margin-bottom: 5vh;
  border: 0.5px solid var(--blue);
  border-radius: 15px;
  box-shadow: 1px 2px 3px 2px rgb(0 0 0 / 0.1);
`

const Header = styled.h3`
  display: flex;
  width: 100%;
  height: 7vh;
  justify-content: center;
  align-items: center;
  background: none;
  color: var(--blue);
  font-size: 16px;
  border-radius: 15px 15px 0 0;
  border: none;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: underline;
`

const Text = styled.p`
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  background: var(--orange);
  color: var(--blue);
  font-size: 16px;
  border-radius: 0 0 15px 15px;
  margin: 10px 15px 30px 10px;
  border: none;
`
