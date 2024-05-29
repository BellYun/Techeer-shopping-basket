import '../../../css/index.css'
import cart from '../../../assets/svgs/cart.svg'
import product from '../../../assets/images/product.png'
import '../../../css/common/nav.css'

interface IProduct  {
  price:number
  name:string
  imageUrl:string
}

export const Product = ({price,name,imageUrl}:IProduct) =>{
  console.log(imageUrl)
  return(
    <div>
      <img src={product} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <img src={cart} alt=  "장바구니" />
      </div>
    </div>
  )
}