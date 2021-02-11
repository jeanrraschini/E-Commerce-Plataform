import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`

const PreviewBackground = styled.div`
  width: 100%;
  height: 95%;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`

const CardInfo = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

const CardName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

const CardPrice = styled.span`
  width: 10%;
`

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return <Card>
    <PreviewBackground imageUrl={imageUrl}/>
    <CardInfo>
      <CardName>{name}</CardName>
      <CardPrice>{price}</CardPrice>
    </CardInfo>
  </Card>
}

export default CollectionItem