import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/cartStyles.css";

const CartComp = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.cart.value);
  const total = useSelector((state) => state.cartItems.total);
  const products = useSelector((state) => state.cartItems.value);

  useEffect(() =>{
    {document.getElementsByTagName("body")[0].style.overflow = value ? "hidden" : "auto"}

  }, [value]);
  return (
    <>
        <div className="cart" style={{transform: value ? "translate(0%)" : "translate(100%)"}}>
            <div className="cart-close" onClick={() => dispatch({type: "cart/close"})}><span  style={{fontWeight: 600}}>X</span> Close</div>
            <h3 className="cart-title">Shopping Cart</h3>
            <div className="cart-products">
                {products.map((product, index) =>(
                  <div key={index} className="cart-product">
                    <img src={product.imgUrl} alt={product.productName} />
                    <div className="product-detail">
                      <h2>{product.productName}</h2>
                      <p>Price: ₦{product.productPrice}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-price-box">Total: <span style={{textAlign: "right"}}>{total},000</span></div>
            <button className="cart-btn">Proceed to Checkout</button>
        </div>
        <div className={value ? "backdrop" : ""}></div>
    </>
  )
}

export default CartComp;