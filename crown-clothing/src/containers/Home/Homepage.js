import React from 'react';
import styled from 'styled-components'
import ContentWrapper from '../../components/ContentWrapper'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

const Homepage = () => {
  return (
  <HomeContainer>
    <ContentWrapper/>
  </HomeContainer>)
};

export default Homepage;