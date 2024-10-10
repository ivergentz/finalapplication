import React, { useState } from "react"
import ReactPlayer from "react-player/lazy"
import styled from "styled-components"

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
          <strong>Moin,</strong>
          <br />
          <br />
          wenn du hier auf der Seite gelandet bist, warst du neugirig auf mich
          und auf das, was dich hinter dem QR-Code erwartet. <br />
          <br />
          Die Antwort: <strong>Ich</strong>.<br />
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
          url='https://vimeo.com/1017917235?share=copy#t=0'
          width='100%'
          height='32vh'
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
  padding-bottom: 4.5vh;

  h2 {
    padding: 0 0 5vh 0;
    text-transform: uppercase;
    text-decoration: underline double;
    padding: 4vh;
  }
  p {
    text-align: justify;
    padding: 0 0 5vh 0;
    padding: 4vh;
  }

  iframe {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`
