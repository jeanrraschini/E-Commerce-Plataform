import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FormInput from '../components/FormInput'
import Button from '../components/Button'

const SignInBlock = styled.div`
  width: 100%;
  max-width: 30vw;
  display: flex;
  flex-direction: column
`

const Title = styled.h2`
  margin: 20px 0
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
    setUserInfo({
      ...userInfo,
      [name] : value
    })
  }

  useEffect(() => {
    
  },)

  return (<SignInBlock>
    <Title>I already have an account</Title>
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
      <Button type="submit" name="Submit Form">Sign in</Button>
    </form>
  </SignInBlock>)
}

export default SignIn