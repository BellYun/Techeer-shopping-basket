import '../css/common/nav.css'
import '../css/index.css'
import product from '../assets/images/product.png'
import '../css/common/nav.css'
import '../css/page/product.css'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { cartAtom } from '../atoms/atoms'

type IProduct = {
  id:number
  price:number
  name:string
  imageUrl:string
}


type cartItem ={
  product: IProduct,
  number: number,
  isChecked: boolean
}

export const ItemDetailPage = () =>{
  const fetchItemDetail =async () => {
    const res = await fetch('https://example.com/products/id');
    //실제 코드에서는 id값에 따라서 다르게 받아온다고 가정
    if(!res.ok){
      throw new Error('Network response was not ok');
    }
    return res.json()
  }

  const {isPending, isError, data, error } = useQuery({
    queryKey:['itemList'],
    queryFn: fetchItemDetail
  })


  const [cartItems, setCartItems] = useAtom(cartAtom);

  const handleCartClick = (productId:number, e: React.MouseEvent<HTMLButtonElement>) => {
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
          name: data.response.name,
          price: data.response.price,
          imageUrl: data.response.imageUrl,
          id: data.response.id
        },
        number: 1,
        isChecked: false
      };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    alert('장바구니에 추가되었습니다!')
  };
  
  if(isPending){
    return(
      <div>
        Loading
      </div>
    )
  }

  if(isError){
    return(
      <div>
        {error.message}
      </div>
    )
  }
  
  return(
      <div className="product-detail-container">
        <div className="flex-col-center w-520">
          <img
            className="w-480 h-480 mb-10"
            src={product}
            alt="PET보틀-정사각(420ml)"
          />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{data.response.name}</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">{data.response.price}원</span>
            </div>
          </div>
          <button onClick={(e)=>handleCartClick(data.response.id , e)} className="product-detail-button flex-center mt-20">
            장바구니
          </button>
        </div>
      </div>
  )
}