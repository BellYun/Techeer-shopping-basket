import '../css/common/nav.css'
import '../css/index.css'
import product from '../assets/images/product.png'
import '../css/common/nav.css'
import '../css/page/product.css'
// import { useEffect, useState } from 'react'

// interface Iproduct {
//   id:number,
//   price:number,
//   name:string,
//   imageUrl:string
// }

export const DetailPage = () =>{

  // const [ productInfo, setProductInfo ] = useState<Iproduct|null>(null);
  // useEffect(()=>{
  //   //api호출 함수
  // },[])

  // const handleAddProductCart = () =>{
  // 카트에  product 추가하는 코드
  // }

  return(
      <div className="product-detail-container">
        <div className="flex-col-center w-520">
          <img
            className="w-480 h-480 mb-10"
            src={product}
            alt="PET보틀-정사각(420ml)"
          />
          <div className="product-detail-info">
            <span className="product-detail-info__name">PET보틀-정사각(420ml)</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">43,000원</span>
            </div>
          </div>
          <button className="product-detail-button flex-center mt-20">
            장바구니
          </button>
        </div>
      </div>
  )
}