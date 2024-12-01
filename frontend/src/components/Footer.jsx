import "../Styles/footerStyles.css";

const FooterComp = () => {
  return (
    <div className="footer">
        <div className="nav-logo">
            <img src="../../logo-flowers-black.png" alt="" />
            <h2 className="nav-title">Ellora</h2>
        </div>
        <form action="" className="footer-form">
            <input type="email" placeholder="Email"/>
        </form>
        <div className="footer-socials">
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default FooterComp