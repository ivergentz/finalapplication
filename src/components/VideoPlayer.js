import React, { useState } from "react"
import ReactPlayer from "react-player/lazy"
import styled from "styled-components"
import video from "../assets/logo.png"
const VideoPlayer = () => {
  const [videoState, setVideoState] = useState(false)
  const bufferStartHandler = () => {
    console.log("Bufering.......")
    setVideoState({ ...videoState, buffer: true })
  }

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play")
    setVideoState({ ...videoState, buffer: false })
  }

  return (
    <>
      <Wrapper>
        <h2>Motivation</h2>
        <p>
          Moin,
          <br />
          <br />
          wenn du hier auf der Seite gelandet bist, warst du neugirig auf mich
          und auf das, was dich hinter dem QR-Code erwartet. <br />
          <br />
          Die Antwort: Ich.
          <br />
          <br />
          Beziehungsweise meine kleine App, die mich besser vorstellen soll als
          ein langweiliges Anschreiben mit Zeugnissen und Lebenslauf. <br />
          <br />
          Also nimm' dir doch bitte noch kurz Zeit, schau' dir das Video an und
          überzeuge dich von mir. Und wenn dir gefallen hast, was du gesehen
          hast: <br />
          Ich freue mich von dir zu hören und afu ein persönliches Gespräch.
          <br />
          Klicke hierzu einfach auf das Telefon- oder Mailsymbol im
          Kontaktbereich, unten auf der Seite.
          <br />
          <br />
          Beste Grüße,
          <br />
          Iver
          <br />
        </p>
        <ReactPlayer
          className='react-player fixed-bottom'
          url={video}
          width='100%'
          height='100%'
          controls={true}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}
        />
      </Wrapper>
    </>
  )
}

export default VideoPlayer

const Wrapper = styled.section`
  padding-top: 10vh;
  display: flex;
  width: 100vw;
  align-items: flex-start;
  flex-direction: column;
  max-width: 800px;
  background: var(--blue);
  margin-top: 10vh;

  h2 {
    padding: 3vh 0 5vh 0;
    text-transform: uppercase;
    text-decoration: underline;
    padding: 4vh;
    color: var(--red);
    background: var(--blue);
  }
  p {
    text-align: justify;
    padding: 4vh;
    background: var(--blue);
    color: var(--white);
  }

  iframe {
    display: flex;
    width: 100%;
    justify-content: center;
    background: var(--blue);
  }
`
