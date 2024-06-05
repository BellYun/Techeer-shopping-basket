// import { useState } from 'react'
// import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Product } from '../components/page/Cartpage/Product'
import { cartAtom } from '../atoms/atoms'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type IProduct = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

type CartItem = {
  product: IProduct;
  number: number;
  isChecked: boolean;
}

export const CartPage = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const [allItemTrue, setAllItemTrue] = useState<boolean>(false);
  const [ totalPrice, setTotalPrice ] = useState<number>(0);
  const [checkedNumber, setCheckedNumebr ]= useState<number>(0);
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const allChecked = cartItems.every(item => item.isChecked);
    setAllItemTrue(allChecked);
    const total = cartItems.reduce((sum, item) => {
      if (item.isChecked) {
        return sum + (item.number * item.product.price);
      }
      return sum;
    }, 0);

    setTotalPrice(total);
    const number = cartItems.reduce((number,item)=>{
      if(item.isChecked){
        return number = number+1
      }
      return number;
    },0);
    setCheckedNumebr(number)
  }, [cartItems]);

  const handleDeleteOnCart = (id: number) => {
    setCartItems((prev: CartItem[]) => prev.filter((item: CartItem) => item.product.id !== id));
  }

  const handleChangeCartItemNumber = (productId: number, editNumber: number) => {
    const inCartIndex = cartItems.findIndex((item: { product: { id: number } }) => item?.product.id === productId);
    const updatedCart = cartItems.map((item: CartItem, index: number) =>
      index === inCartIndex
        ? { ...item, number: editNumber }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleChangeCartItemChecked = (productId: number) => {
    const inCartIndex = cartItems.findIndex((item: { product: { id: number } }) => item?.product.id === productId);
    const updatedCart = cartItems.map((item: CartItem, index: number) =>
      index === inCartIndex
        ? { ...item, isChecked: !item.isChecked }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  const handleAllChecked = ()=>{
    const updatedCart = cartItems.map(item => ({
      ...item,
      isChecked: !allItemTrue
    }));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  
  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>
      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked={allItemTrue}
                onChange={handleAllChecked}
              />
              <label className="checkbox-label" htmlFor="checkbox">
                {allItemTrue ? '선택 해제' : '전체 선택'}
              </label>
            </div>
            <button className="delete-button">상품삭제</button>
          </div>
          <h3 className="cart-title">든든배송 상품({cartItems.length}개)</h3>
          <hr className="divide-line-gray mt-10" />
          {cartItems.map((item: CartItem) => (
            <>
              <Product
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                number={item.number}
                isChecked={item.isChecked}
                editChecked={handleChangeCartItemChecked}
                editNumber={handleChangeCartItemNumber}
                deleteItem={handleDeleteOnCart}
              ></Product>
              <hr className="divide-line-thin mt-10" />
            </>
          ))}
        </section>
        <section className="cart-right-section">
          <div className="cart-right-section__top">
            <h3 className="cart-title">결제예상금액</h3>
          </div>
          <hr className="divide-line-thin" />
          <div className="cart-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <span className="highlight-text">결제예상금액</span>
              <span className="highlight-text">{totalPrice}원</span>
            </div>
            <div className="flex-center mt-30 mx-10">
              <button className="primary-button flex-center"
              onClick={()=>navigate(`/order`)}>
                주문하기({checkedNumber}개)
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}