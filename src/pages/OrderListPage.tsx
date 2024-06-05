// import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { OrderList } from '../components/page/OrderListPage.tsx/OrderList'
import '../css/index.css'

interface IOrderListsItem{
  id:number,
  orderDetails:IOrderDetail[]
}

interface IOrderDetail{
  id:number,
  price: number,
  name: string,
  imageUrl:string,
  quantity:number,
}

export const OrderListPage = () =>{

  const fetchOrderList =async () => {
    const res = await fetch(`https://example.com/orderlist`);
    if(!res.ok){
      throw new Error('Network response was not ok');
    }
    return res.json()
  }

  const {isPending, isError, data, error } = useQuery({
    queryKey:['orderlist'],
    queryFn: fetchOrderList
  })

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
    <section className="order-section">
        <header className="flex-col-center mt-20">
          <h2 className="order-section__title">주문 목록</h2>
          <hr className="divide-line mt-20" />
        </header>
        { data.response.map((orderItem:IOrderListsItem)=>(
          <OrderList key={orderItem.id} id={orderItem.id} itemList={orderItem.orderDetails}></OrderList>
        )) }
    </section>
  )
}