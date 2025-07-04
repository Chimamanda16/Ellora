import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { removed, incrementQty, decrementQty } from "../store/cartItemsSlice";
import "../Styles/cartStyles.css";

const CartComp = () => {
  //Initialize states
  const dispatch = useDispatch()
  //Cart open and close state
  const value = useSelector((state) => state.cart.value);
  //Cart products total price
  const total = useSelector((state) => state.cartItems.total);
  //Cart products
  const products = useSelector((state) => state.cartItems.value);

  //Remove scrollbar from body when cart is open
  useEffect(() =>{
    {document.getElementsByTagName("body")[0].style.overflow = value ? "hidden" : "auto"}
  }, [value]);
  return (
    <>
        <div className="cart" style={{transform: value ? "translate(0%)" : "translate(100%)"}}>
            <div className="cart-close" onClick={() => dispatch({type: "cart/close"})}><span  style={{fontWeight: 600}}>X</span> Close</div>
            <h3 className="cart-title">Shopping Cart</h3>
            <div className="cart-products">
              {/* Display cart items*/}
                {products.map((product, index) =>(
                  <div key={index} className="cart-product">
                    <img src={product.imgUrl} alt={product.productName} />
                    <div className="product-detail">
                      <h2>{product.productName}</h2>
                      <div className="quantity-controls">
                        <button onClick={() => dispatch(decrementQty(product.productId))}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => dispatch(incrementQty(product.productId))}>+</button>
                      </div>

                      <p>Price: ₦{product.productPrice}</p>
                    </div>
                    <div className="remove-btn" onClick={() =>{ 
                        {dispatch(removed(product.productId))}
                      }}>X</div>
                  </div>
                ))}
            </div>
            <div className="cart-price-box">Total: <span style={{textAlign: "right"}}>{total}</span></div>
            <Link to="/payment"><button className="cart-btn">Proceed to Checkout</button></Link>
        </div>
        <div className={value ? "backdrop" : ""} onClick={() => dispatch({type: "cart/close"})}></div>
    </>
  )
}

export default CartComp;