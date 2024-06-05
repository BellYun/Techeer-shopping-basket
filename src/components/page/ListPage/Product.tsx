import '../../../css/index.css'
import cart from '../../../assets/svgs/cart.svg'
import products from '../../../assets/images/product.png'
import '../../../css/common/nav.css'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { cartAtom } from '../../../atoms/atoms'
import { useState } from 'react'
import Modal from '../../common/Modal'

type IProduct = {
  id:number
  price:number
  name:string
  imageUrl:string
}

interface ProductProps {
  product: IProduct;
}

type cartItem ={
  product: IProduct,
  number: number,
  isChecked: boolean
}

export const Product = ({product}:ProductProps) =>{
  const navigate = useNavigate()
  console.log(product.imageUrl)
  const [cartItems, setCartItems] = useAtom(cartAtom);


  const handleCartClick = (productId:number, e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const inCartIndex = cartItems.findIndex((item: { product: { id: number } }) => item?.product.id === productId);
    if(inCartIndex !== -1){
      const updatedCart = cartItems.map((item:cartItem, index:number) =>
        index === inCartIndex 
          ? {...item, number: item.number + 1}
          : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const newItem = {
        product: {
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          id: product.id
        },
        number: 1,
        isChecked: false
      };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    alert('장바구니에 추가되었습니다!(로컬)')

  };

  return (
    <div onClick={() => navigate(`/product/${product.id}`)}>
      <img src={products} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price}원</span>
        </div>
        <img src={cart} alt="장바구니"
          onClick={(e)=>handleCartClick(product.id,e)} />
      </div>

    </div>
  )
}
