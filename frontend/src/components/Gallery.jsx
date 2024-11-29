import "../Styles/galleryStyles.css";

// const positions = [
//   {    top: 0;
//     left: 3%;
//     height: 200px;
//     width: 200px;
//   },
// {top: 0;
// left: 80%;
// height: 200px;
// width: 200px;},
// {    top: 260px;
//   left: 10%;
//   height: 200px;
//   width: 200px;},
//   {    top: 260px;
//     left: 74%;
//     width: 200px;
//     height: 200px;},
//     {
//       top: 500px;
//       left: 3%;
//       width: 200px;
//       height: 200px;
//     },
//     {top: 500px;
//     left: 80%;
//     width: 200px;
//     height: 200px;},
//     {    top: 100px;}
// ]

const GalleryComp = () => {
  return (
    <div className="gallery-cont">
        <div className="gallery">
            <div className="img">
                <img src="money-tower-balloon-box.jpg" alt="full surprise package" />
            </div>
            <div className="img">
                <img src="balloon-treat-box.jpg" alt="Balloon treat box" />
            </div>
            <div className="img">
                <img src="money-bouquet.png" alt="Money-bouquet" />
            </div>
            <div className="img">
                  <img src="flower-bouquet.jpg" alt="flower bouquet" />
            </div>
            <div className="img">
                <img src="money-box.jpg" alt="Money box" />
            </div>
            <div className="img">
                <img src="teddies.jpg" alt="Teddies" />
            </div>
            <div className="img">
                <img src="teddy-package.jpg" alt="Teddy Package" />
            </div>  
        </div>
    </div>
    
  )
}

export default GalleryComp