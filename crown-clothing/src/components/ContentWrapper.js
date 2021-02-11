import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import { sections } from '../directory'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ContentWrapper = () => {
  return (
    <Wrapper>
      {(sections || []).map((({id, ...OtherSectionProps}) => (
        <MenuItem key={id} {...OtherSectionProps} />
      )))}
    </Wrapper>
  )
}

export default ContentWrapper