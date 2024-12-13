import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/cartStyles.css";

const CartComp = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.cart.value);
  const products = useSelector((state) => state.cartItems.value);
  console.log(products);

  useEffect(() =>{
    {document.getElementsByTagName("body")[0].style.overflow = value ? "hidden" : "auto"}

  }, [value]);
  return (
    <>
        <div className="cart" style={{transform: value ? "translate(0%)" : "translate(100%)"}}>
            <div className="cart-close" onClick={() => dispatch({type: "cart/close"})}><span  style={{fontWeight: 600}}>X</span> Close</div>
            <h3 className="cart-title">Shopping Cart</h3>
            <div className="cart-product">
                {products.map((product, index) =>(
                  <div key={index} className="cart-product">
                    {console.log(product.imgUrl)}
                  </div>
                ))}
            </div>
            <div className="cart-price-box">Total: <span style={{textAlign: "right"}}>0</span></div>
            <button className="cart-btn">Proceed to Checkout</button>
        </div>
        <div className={value ? "backdrop" : ""}></div>
    </>
  )
}

export default CartComp;