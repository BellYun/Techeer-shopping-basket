export const Product = () =>{
  const product =''
  return(
    <div className="cart-container">
              <div className="flex gap-15 mt-10">
                <input
                  className="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked={true}
                />
                <img
                  className="w-144 h-144"
                  src={product}
                  alt="PET보틀-정사각(420ml)"
                />
                <span className="cart-name">PET보틀-정사각(420ml)</span>
              </div>
              <div className="flex-col-center justify-end gap-15">
                <img
                  className="cart-trash-svg"
                  src="./assets/svgs/trash.svg"
                  alt="삭제"
                />
                <div className="number-input-container">
                  <input type="number" className="number-input" value="1" />
                  <div>
                    <button className="number-input-button">▲</button>
                    <button className="number-input-button">▼</button>
                  </div>
                </div>
                <span className="cart-price">123,456원</span>
              </div>
            </div>
  )
}