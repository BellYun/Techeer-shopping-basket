import '../css/index.css'
import '../css/common/nav.css'
import { Product } from '../components/page/ListPage/Product'
import { useQuery } from '@tanstack/react-query'

interface Iproduct {
  id:number,
  price:number,
  name:string,
  imageUrl:string
}

export const ItemListPage = () => {
  const fetchItemList =async () => {
    const res = await fetch(`https://example.com/products`);
    if(!res.ok){
      throw new Error('Network response was not ok');
    }
    return res.json()
  }

  const {isPending, isError, data, error } = useQuery({
    queryKey:['itemList'],
    queryFn: fetchItemList
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
      <section className="product-container">
        {data?.response.map((product:Iproduct)=>(
          <Product key={product.id} product={product}></Product>
        ))}        
      </section>
  )
}