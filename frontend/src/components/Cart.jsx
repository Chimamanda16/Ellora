import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/cartStyles.css";

const CartComp = () => {
  useEffect(() =>{
    {document.getElementsByTagName("body")[0].style.overflow = value ? "hidden" : "auto"}

  })
  const dispatch = useDispatch()
  const value = useSelector((state) =>state.cart.value);
  console.log(value);
  return (
    <>
        <div className="cart" style={{transform: value ? "translate(0%)" : "translate(100%)"}}>
            <div className="cart-close" onClick={() => dispatch({type: "cart/close"})}><span  style={{fontWeight: 600}}>X</span> Close</div>
            <h3 className="cart-title">Shopping Cart</h3>
            <div className="cart-product"></div>
            <div className="cart-price-box">Total: <span style={{textAlign: "right"}}>0</span></div>
            <button className="cart-btn">Proceed to Checkout</button>
        </div>
        <div className={value ? "backdrop" : ""}></div>
    </>
  )
}



export default CartComp;