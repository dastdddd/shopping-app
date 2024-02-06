import React from 'react';
import ProductItem from './product-Item';

const List = ({data}) => {
  return (
    <div className='product-list'>
      {data.map(item => <ProductItem key={item.id} {...item}/>)}
    </div>
  );
};

export default List;