import React from "react"
import styled from "styled-components"

const ScrollButton = () => {
  const reloadPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const bottomScroll = () => {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Button onClick={reloadPage}>△</Button>
      <ButtonUp onClick={bottomScroll}>▽</ButtonUp>
    </>
  )
}

export default ScrollButton

const Button = styled.button`
  position: fixed;
  border: none;
  background: none;
  bottom: 10%;
  right: 4vw;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: rgb(208, 45, 38);
`

const ButtonUp = styled.button`
  position: fixed;
  border: none;
  background: none;
  bottom: 5%;
  right: 4vw;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: rgb(208, 45, 38);
`
