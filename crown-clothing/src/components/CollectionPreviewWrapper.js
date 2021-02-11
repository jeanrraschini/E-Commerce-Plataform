import React from 'react'
import styled from 'styled-components'
import CollectionItem from './CollectionItem'

const CollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const PreviewTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`

const CollectionPreviewWrapper = ({ title, items }) => {
  return (
    <CollectionPreview>
      <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...OtherItemProps}) => <CollectionItem key={id} {...OtherItemProps}/>
        )}
      </Preview>
    </CollectionPreview>
  )
}

export default CollectionPreviewWrapper