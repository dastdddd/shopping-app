import React, { useState } from 'react';
import './App.css'
import products from './product.json'
import Header from './components/header';
import List from './components/list';


const App = () => {
  const [data, setData] = useState(products);

  const filterDiscountProduct = () => {
    const newArr = products.filter(item => item.discount !== null)
    //не взяли data из-за того что обратно были все продукты
    setData(newArr)
  }
  const productAll = () => {
    setData(products)
    //обратно все продукты
  }
  const filterCategory = (id) => {
    console.log(id);
    const newArr = products.filter(item => item.category_id === id)
    setData(newArr)
  }
  const searchProduct = (text) => {
    const newArr = products.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
    //item.title.toLowerCase().indexOf -делаем маленькие буквы и находим индекс букв
    //(text.toLowerCase()) > -1  -- поисковые буквы тоже делаем toLowerCase и ищем иначе вернет -1массив(нету иакого)
    setData(newArr);
  }

  return (
    <div>
      <Header
        searchProduct={searchProduct}
        productAll={productAll}
        filterCategory={filterCategory}
        filterDiscountProduct={filterDiscountProduct} />
      <List data={data} />
    </div>
  );
};

export default App;