import {Link} from "react-router-dom";
import "../Styles/footerStyles.css";

const FooterComp = () => {
  return (
    <div className="footer">
        <div className="nav-logo footer-logo">
            <img src="../../logo-flowers-black.png" alt="" />
            <h2 className="nav-title">Ellora</h2>
        </div>
        <form action="" className="footer-form">
            <input type="email" placeholder="Email"/>
        </form>
        <div className="footer-socials">
          <Link target="_blank" to="https://wa.me/+2349160013762"><i className="fa-brands fa-whatsapp"></i></Link>
          <Link target="_blank" to="https://www.tiktok.com/@gabirella246?_r=1&_d=eh96imhae7h0h3&sec_uid=MS4wLjABAAAAqVAW_FvY7kUaqTW_NuNdt3tzgqAUFXZRgQpfSpziegA81smXfo7_02FCb0J9mEs3&share_author_id=7182894270319150086&sharer_language=en&source=h5_m&u_code=e5hej1cjj926f2&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAAqVAW_FvY7kUaqTW_NuNdt3tzgqAUFXZRgQpfSpziegA81smXfo7_02FCb0J9mEs3&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=7182894270319150086&enable_checksum=1&share_link_id=F571A2AD-46D5-4B75-8FEC-97442B757E1E&share_app_id=1233"><i className="fa-brands fa-tiktok"></i></Link>
          <Link target="_blank" to="https://www.instagram.com/ellora_gifts20/?igsh=MThoNDF1ZGMzdHc2Zw%3D%3D"><i className="fa-brands fa-instagram"></i></Link>
        </div>
    </div>
  )
}

export default FooterComp