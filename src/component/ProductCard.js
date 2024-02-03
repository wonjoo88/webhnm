import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img}/>
      <p>{item?.choice === true? 'Conscious choice':''}</p>
      <p>{item?.title}</p>
      <p>₩ {item?.price}</p>
      <p>{item?.new === true? '신재품':''}</p>
    </div>
  )
}

export default ProductCard
