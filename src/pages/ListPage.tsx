import '../css/index.css'
import '../css/common/nav.css'
import { Product } from '../components/page/ListPage/Product'
// import { useEffect, useState } from 'react'

interface Iproduct {
  id:number,
  price:number,
  name:string,
  imageUrl:string
}

export const ListPage = () => {

  // const [ productList, setProductList ] = useState<IproductList[]>([]);

  // useEffect(()=>{
  //   //productList 받아오는 코드
  // },[])

// const handleAddProductCart = () =>{
  //   //상태 관리 활용해서 카트에 product추가
  // }

  const productList:Iproduct[] = [
    {
      "id": 1,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 2,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 3,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 4,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 5,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 6,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 7,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 8,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 9,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 10,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 11,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 12,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 13,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 14,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },
    {
      "id": 15,
      "price": 10000,
      "name": "치킨",
      "imageUrl": "http://example.com/chicken.jpg"
    },
    {
      "id": 16,
      "price": 20000,
      "name": "피자",
      "imageUrl": "http://example.com/pizza.jpg"
    },

  ]

  return(
      <section className="product-container">
        {productList.map((product)=>(
          <Product key={product.id} price={product.price} name={product.name} imageUrl={product.imageUrl}></Product>
        ))}        
      </section>

  )
}