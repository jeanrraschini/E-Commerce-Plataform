import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  position: relative;
  margin: 45px 0;
`

const Input = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
    & ~ label {
      top: -20px;
      font-size: 14px;
      color: black;
    }
  }
`

const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -20px;
    font-size: 14px;
    color: black;
  }
`

const FormInput = ({ handleChange, label, ...otherInputProps }) => {

  return (
    <InputBox>
      <Input onChange={handleChange} {...otherInputProps} />
      {
        label ?
        (<Label className={!!((otherInputProps || {}).value || {}).length && 'shrink'}>{label}</Label>) : null
      }
    </InputBox>
  )
}

export default FormInput