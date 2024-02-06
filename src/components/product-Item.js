import React from 'react';

const ProductItem = ({ title, price, discount, category_id, id }) => {
  //if (discount === null){
  //  return <h3>{title}</h3>
  //}
  let a = price - price * discount / 100

  return (
    <div className='product-card'>
      {
        discount === null ? <>
          <h3>{title}</h3>
          <p>{price} сом</p></> : <>
          <div className='discount-item'>{discount} %</div>
          <h3>{title}</h3>
          <p className='old-price'>{price} сом</p>
          <p>{Math.floor(a)} сом</p>
        </>
      }
    </div>
  );
};

export default ProductItem;