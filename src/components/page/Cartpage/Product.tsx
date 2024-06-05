import product from '../../../assets/images/product.png'
import trash from '../../../assets/svgs/trash.svg'

type Props ={
  id:number,
  name:string,
  price:number,
  number:number,
  isChecked:boolean,
  editChecked:(productId: number) => void,
  editNumber:(productId: number, editNumber: number) => void,
  deleteItem:(id: number) => void
}

export const Product = ({id,name,price,number,isChecked,editChecked,editNumber,deleteItem}:Props) =>{

  

  return(
    <div className="cart-container">
              <div className="flex gap-15 mt-10">
                <input
                  className="checkbox"
                  name="checkbox"
                  type="checkbox"
                  onChange={()=>editChecked(id)}
                  checked={isChecked}
                />
                <img
                  className="w-144 h-144"
                  src={product}
                  alt="PET보틀-정사각(420ml)"
                />
                <span className="cart-name">{name}</span>
              </div>
              <div className="flex-col-center justify-end gap-15">
                <img
                  className="cart-trash-svg"
                  src={trash}
                  alt="삭제"
                  onClick={()=>deleteItem(id)}
                />
                <div className="number-input-container">
                  <input type="number" className="number-input" value={number} />
                  <div>
                    <button className="number-input-button" onClick={()=>editNumber(id,number+1)}>▲</button>
                    <button className="number-input-button" onClick={()=>editNumber(id,number-1)} disabled={number===1? true:false}>▼</button>
                  </div>
                </div>
                <span className="cart-price">{price}원</span>
              </div>
            </div>
  )
}