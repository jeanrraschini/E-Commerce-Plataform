import React, { useState } from 'react'
import CollectionPreview from '../../components/CollectionPreviewWrapper'
import { SHOP_DATA } from '../../directory'

const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA)

  console.log(shopData)
  return (<>
  {shopData.map(({ id, ...OtherPreviewProps }) => (
    <CollectionPreview key={id} {...OtherPreviewProps} />
  ))}
  </>)
}

export default ShopPage


