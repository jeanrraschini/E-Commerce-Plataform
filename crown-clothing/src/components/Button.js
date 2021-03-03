import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-family: 'Open Sans Condensed';
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: 200ms ease all;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &.google-sign-in {
    background-color: #4285f4;
    color: #fff;

    &:hover {
      background-color: #357ae8;
      border: none
    }
  }`

const Button = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
  return <StyledButton className={isGoogleSignIn ? 'google-sign-in' : null} {...otherButtonProps}>{children}</StyledButton>
}

export default Button