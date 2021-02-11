import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/crown.svg'

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
  }
`

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Header = () => {
  return <Wrapper>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <Options>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
    </Options>
  </Wrapper>

}

export default Header

