import "../Styles/galleryStyles.css";


const GalleryComp = () => {
  return (
    <div className="gallery-cont">
      <h2 className="gallery-title">Shop Our Products</h2>
      <p className="gallery-description">All varieties of flowers available in different shapes and types special hand-tied bouquet</p>
      <div className="gallery">
        <div className="gallery-img-cont">
            <img src="money-tower-balloon-box.jpg" alt="full surprise package" />
            <h2 className="item-title">Money Tower</h2>
            <p className="item-price">₦100,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        <div className="gallery-img-cont">
            <img src="balloon-treat-box.jpg" alt="Balloon treat box" />
            <h2 className="item-title">Balloon treat box</h2>
            <p className="item-price">₦35,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        <div className="gallery-img-cont">
            <img src="money-bouquet.png" alt="Money-bouquet" />
            <h2 className="item-title">Money bouquet</h2>
            <p className="item-price">₦45,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        <div className="gallery-img-cont">
            <img src="flower-bouquet.jpg" alt="flower bouquet" />
            <h2 className="item-title">Flower bouquet</h2>
            <p className="item-price">₦15,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        <div className="gallery-img-cont">
            <img src="money-box.jpg" alt="Money box" />
            <h2 className="item-title">Money box</h2>
            <p className="item-price">₦45,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        <div className="gallery-img-cont">
            <img src="teddies.jpg" alt="Teddies" />
            <h2 className="item-title">Teddies</h2>
            <p className="item-price">₦30,000</p>
            <div>
              <button className="product-button">Add to cart</button>
              <button className="product-button">Buy</button>
            </div>
        </div>
        {/* <div className="gallery-img-cont">
            <img src="teddy-package.jpg" alt="Teddy Package"/>
            <h2 className="item-title">Teddy Package</h2>
            <p className="item-price">₦30,000</p>
        </div> */}
      </div>
    </div>
    
  )
}

export default GalleryComp