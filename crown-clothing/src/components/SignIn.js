import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { signInWithGoogle } from '../firebase/firebase.utils'

const SignInBlock = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column
`

const Title = styled.h2`
  margin: 20px 0
`

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
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
      <ButtonsBox>
        <Button type="submit" name="Submit Form">Sign in</Button>
        <Button onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</Button>
      </ButtonsBox>
    </form>
  </SignInBlock>)
}

export default SignIn