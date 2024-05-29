// import { useState } from 'react'
// import { useEffect, useState } from 'react'
import { Product } from '../components/page/Cartpage/Product'

// interface ICartItem{
//   name:string;
//   price:number;
//   imageUrl:string;
//   id:number;
// }

// interface ICartListItem{
//   id:number,
//   product:ICartItem
// }

export const CartPage = () =>{
  // const [ cartList, setCartList ] = useState<ICartListItem[]>([]);
  // const [ cartListCalculation, setCartListCalculation ] = useState([]);
  // //TODO: 장바구니에 담긴 아이템 어떻게 수를 셀지 고민

  // useEffect(()=>{
  // //TODO: 카트 아이템 받아오기
  // },[])

  // const handleDeleteOnCart = () =>{
  //   //TODO: 카트에서 선택된 물품을 삭제하는 코드 구현
  // }


  // const handleOrderOnCart = () =>{
  //   //TODO: 카트에서 선택된 물품을 주문하는 코드 구현
  // }

  
  const cartItem = [
    {
      "id": 1,
      "product": {
        "name": "test",
        "price": 1234,
        "imageUrl": "test.com",
        "id": 1
      },
    },
    {
      "id": 5,
      "product": {
        "name": "tes11111t",
        "price": 1234,
        "imageUrl": "test.com",
        "id": 10
      }
    },
  ]

  return(
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
                  checked={true}
                />
                <label className="checkbox-label" htmlFor="checkbox">선택해제</label>
              </div>
              <button className="delete-button">상품삭제</button>
            </div>
            <h3 className="cart-title">든든배송 상품(3개)</h3>
            <hr className="divide-line-gray mt-10" />
            {
              cartItem.map((item)=>(
                <>
                  <Product key={item.id}></Product>
                  {/* TODO: 어떤걸 넘겨줘야하는지 정리 */}
                  <hr className="divide-line-thin mt-10" />
                </>
              ))
            }
          </section>
          <section className="cart-right-section">
            <div className="cart-right-section__top">
              <h3 className="cart-title">결제예상금액</h3>
            </div>
            <hr className="divide-line-thin" />
            <div className="cart-right-section__bottom">
              <div className="flex justify-between p-20 mt-20">
                <span className="highlight-text">결제예상금액</span>
                <span className="highlight-text">21,800원</span>
              </div>
              <div className="flex-center mt-30 mx-10">
                <button className="primary-button flex-center">
                  주문하기(3개)
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>

  )
}