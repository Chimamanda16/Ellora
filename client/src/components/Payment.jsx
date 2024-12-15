import { useSelector } from "react-redux";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import "../Styles/PaymentStyles.css";

const PaymentComp = () => {
    const publicKey = "pk_live_1a3bfa5213f964a27a34308ba77c71a914baffd4"
    const amount = useSelector((state) => state.cartItems.total);
      const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
  
    const paymentProps ={
        email,
        amount,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    }

  return (
    <>
        <h2 className="pay-title">Billling details</h2>
        <form id="paymentForm" autoComplete="on">
            <div className="form-group">
                <label htmlFor="email-address">Email Address</label>
                <input type="email" id="email-address" value={email} required autoComplete="on" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <p id="amount">{amount},000</p>
            </div>
            <div className="form-group" style={{ marginBottom: "15%" }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} required autoComplete="on" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" value={phone} required autoComplete="on" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="street-name">Street</label>
                <input type="text" id="street-name" value={address} autoComplete="on" onChange={(e) => setAddress(e.target.value)} />
            </div>
        </form>
        <div className="form-submit">
                <PaystackButton {...paymentProps} className="pay-btn"/>
        </div>
    </>


  )
}

export default PaymentComp