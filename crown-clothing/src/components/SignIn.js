import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FormInput from '../components/FormInput'

const SignInBlock = styled.div`
  width: 100%;
  max-width: 30vw
`

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    setUserInfo({
      email: '',
      password: ''
    })
  }

  const handleChange = input => {
    const { name, value } = input
    setUserInfo({ [name]: value })
  }

  return (<SignInBlock>
    <h2>I already have an account</h2>
    <span>Sign in with your e-mail and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        name="email"
        type="email"
        label="E-mail"
        value={userInfo.email}
        handleChange={(e) => handleChange(e.target)}
        required 
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        value={userInfo.password}
        handleChange={(e) => handleChange(e.target)}
        required 
      />
      <FormInput type="submit" name="Submit Form"/>
    </form>
  </SignInBlock>)
}

export default SignIn