import "../Styles/ctaStyles.css";

const CtaComp = () => {
  return (
    <div className="cta-comp">
        <div className="cta-box">
            <h2 className="cta-title">Our Collections</h2>
            <p className="cta-desc">Blossoms live in every color and aroma.</p>
            <p className="cta-desc">Beautifully share your emotions with our garden flowers.</p>
        </div>
        
        <div className="content">
            <div className="cta-image">
                <video  autoPlay muted loop>
                    <source src="../package-video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="cta-text">
                <div className="cta-text-box">
                    <h3 className="cta-number">1</h3>
                    <div className="cta-text-desc">
                        <h2>Choose Package</h2>
                        <p>Select from our curated options, designed to suit every need and occasion perfectly.</p>
                    </div>
                </div>
                <div className="cta-text-box">
                    <h3 className="cta-number">2</h3>
                    <div className="cta-text-desc">
                        <h2>Place an Order</h2>
                        <p>Order now to enjoy seamless service. Quality and satisfaction are our priorities.</p>
                    </div>
                </div>
                <div className="cta-text-box">
                    <h3 className="cta-number">3</h3>
                    <div className="cta-text-desc">
                        <h2>Get your package</h2>
                        <p>Receive your gift quickly with ease, crafted to bring joy and delight.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CtaComp