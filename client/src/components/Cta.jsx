import "../Styles/ctaStyles.css";

const CtaComp = () => {
  return (
    <div className="cta-comp">
        <div className="cta-box">
            <h2 className="cta-title">Our Garden Collections</h2>
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
                    <div>
                        <h2>Choose Package</h2>
                        <p>Facilisis sed odio morbi quis commodo odio. Tristique et egestas quis ipsum suspendisse ultrices.</p>
                    </div>
                </div>
                <div className="cta-text-box">
                    <h3 className="cta-number">2</h3>
                    <div className="">
                        <h2>Place an Order</h2>
                        <p>Duis at consectetur lorem donec massa. Sagittis id consectetur purus ut faucibus.</p>
                    </div>
                </div>
                <div className="cta-text-box">
                    <h3 className="cta-number">3</h3>
                    <div className="">
                        <h2>Get your package</h2>
                        <p>Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CtaComp