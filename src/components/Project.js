import React, { Fragment, useState } from "react"
// import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Transition } from "react-transition-group"
import styled from "styled-components"

const StyledImage = styled.img`
  border: 1.5px solid black;
  cursor: pointer;
  height: auto;
  width: 250px;
  transition: border-color 0.25s ease-in-out;
  & :hover {
    border-color: #75f542;
  }
`

const StyledP = styled.p`
  color: white;
`
const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 500px;
  & a {
    color: #adbbf0;
  }
`

const StyledTitle = styled.h3`
  color: #6f8df7;
`

const Project = ({ project }) => {
  const [open, handleChange] = useState(false)
  const duration = 250

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  }

  return (
    <section>
      <StyledTitle>{project.title}</StyledTitle>
      <StyledP>{project.subTitle}</StyledP>
      <StyledImage src={project.image} onClick={() => handleChange(!open)} />

      <Transition
        in={open}
        timeout={duration}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {open => (
          <div style={{ ...defaultStyle, ...transitionStyles[open] }}>
            <StyledP>{project.summary}</StyledP>
            <StyledRow>
              <a href={project.siteLink}>View Project</a>
              {project.sourceLink && (
                <a href={project.sourceLink}>View Source</a>
              )}
            </StyledRow>
          </div>
        )}
      </Transition>
    </section>
  )
}

export default Project
