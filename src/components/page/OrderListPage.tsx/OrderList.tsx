import { useNavigate } from "react-router-dom"
import { Product } from "./Product"

type OrderListProps = {
  id:number,
  itemList:IOrderDetails[]
}

interface IOrderDetails{
  id:number,
  price: number,
  name: string,
  imageUrl:string,
  quantity:number,
}


export const OrderList = ({id,itemList}:OrderListProps) =>{
  const navigate = useNavigate()

  return(
    <div className="order-list">
      <div className="order-list__header">
            <span>주문번호: {id}</span>
            <span onClick={()=>navigate('/order/detail')}>상세보기 </span>
          </div>
          {itemList.map((item)=>(
            <Product id={item.id} price={item.price} itemName={item.name} imageUrl={item.imageUrl} quantity={item.quantity} ></Product>
      ))}
    </div>
  ) 
}