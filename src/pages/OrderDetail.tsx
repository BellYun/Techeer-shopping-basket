import { useQuery } from "@tanstack/react-query";
import { OrderList } from "../components/page/OrderListPage.tsx/OrderList";

export const OrderDetail = () =>{

  const fetchOrder =async () => {
    const res = await fetch(`https://example.com/order`);
    if(!res.ok){
      throw new Error('Network response was not ok');
    }
    return res.json()
  }

  const {isPending, isError, data, error } = useQuery({
    queryKey:['order'],
    queryFn: fetchOrder
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
          <h2 className="order-section__title">주문내역상세</h2>
          <hr className="divide-line mt-20" />

        </header>
        <OrderList id={data.response.id} itemList={data.response.orderDetails}></OrderList>

        <div className="order-detail-container">
          <div className="w-480">
            <span className="order-detail-title">결제금액 정보</span>
            <hr className="divide-line-thin my-20" />
            <div className="flex justify-between">
              <span className="highlight-text">총 결제금액</span>
              <span className="highlight-text">325,600원</span>
            </div>
          </div>
        </div>
      </section>
  )
}