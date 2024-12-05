import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../Styles/cartStyles.css";

const CartComp = () => {
  useEffect(() =>{
    {document.getElementsByTagName("body")[0].style.overflow = value ? "hidden" : "scroll"}

  })

  const value = useSelector((state) =>state.cart.value);
  console.log(value);
  return (
    <>
        <div className={value ? "cart" : ""}>
            <div className="cart-button">X Close</div>
            <h3>Shopping Cart</h3>
            <div className="cart-product"></div>
            <div>Total: </div>
            <button>Proceed to Checkout</button>
            <button>View Cart</button>
        </div>
        <div className={value ? "backdrop" : ""}></div>
    </>
  )
}



export default CartComp;