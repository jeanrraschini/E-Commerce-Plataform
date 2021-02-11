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
<<<<<<< HEAD
      {(sections || []).map(((item, id) => (
        <MenuItem 
        key={item.id} 
        imageUrl={item.imageUrl}
        size={item.size} 
        title={item.title} 
        linkUrl={item.linkUrl}
        />
=======
      {(sections || []).map((({id, ...OtherSectionProps}) => (
        <MenuItem key={id} {...OtherSectionProps} />
>>>>>>> d8f782a4114aec52882e219a36e11a52e8c3bb6b
      )))}
    </Wrapper>
  )
}

export default ContentWrapper