import { useAtom } from "jotai"
import { cartAtom } from "../../../atoms/atoms"
import { useState } from "react"
import Modal from "../../common/Modal"
import product from "../../../assets/images/product.png"

interface IOrderProps{
  id:number
  price: number,
  itemName: string,
  imageUrl:string,
  quantity:number,
}

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

export const Product = ({ id, price,itemName, imageUrl,quantity}:IOrderProps) =>{
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          name: itemName,
          price: price,
          imageUrl: imageUrl,
          id: id
        },
        number: 1,
        isChecked: false
      };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    alert('장바구니에 추가되었습니다!(로컬)')
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  console.log(imageUrl)
  return(
    <div className="order-list-item">
    <div className="flex gap-15 mt-10">
      <img
        className="w-144 h-144"
        src={product}
        alt="PET보틀-정사각(420ml)"
      />
      <div className="flex-col gap-15">
        <span className="order-name">{itemName}</span>
        <span className="order-info">{price}원 / 수량: {quantity}개</span>
      </div>
    </div>
    <button className="primary-button-small flex-center self-start"
      onClick={(e=>handleCartClick(id,e))}
    >
      장바구니
    </button>
    {isModalOpen && <Modal onClose={closeModal} />}
    {/* TODO: 장바구니에 추가하는 코드 작성 */}
  </div>
  )
}