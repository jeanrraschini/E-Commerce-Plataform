import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  & .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
  & .option {
    padding: 10px 15px;
    text-transform: uppercase;
    cursor: pointer;
  }
`

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Header = ({ currentUser }) => {
  return <Wrapper>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <Options>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign out</div>
        :
        <Link className='option' to='/signIn'>Sign In</Link>}
    </Options>
  </Wrapper>

}

export default Header

