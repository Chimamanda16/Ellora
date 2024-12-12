import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import "../Styles/galleryStyles.css";

const queryClient = new QueryClient();

const GallerySubComp = () => {

  // Mutation for fetching images
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ["getProducts"],
    queryFn: async() =>{
      const response = await fetch("http://localhost:5000/images");
      return await response.json();
    }
    
  });
  if(isLoading){
      return(
        <p>Fetching products...</p>
      )
  }
  if(isError){
    return(
      <div>
        <p>Error fetching products: </p>{error}
      </div>
    )
  }

  return (
    <div className="gallery-cont">
      <h2 className="gallery-title">Shop Our Products</h2>
      <p className="gallery-description">All varieties of flowers available in different shapes and types special hand-tied bouquet</p>
      <div className="gallery">
        {data.gallery.map((product, index) => (        
          <div className="gallery-img-cont" key={index}>
            <img src={product.imgUrl} alt={product.productName} />
            <h2 className="item-title">{product.productName}</h2>
            <p className="item-price">{product.productPrice}</p>
            <div>
              <button className="product-button">Add to cart</button>
            </div>
          </div>
        ))}
        
        {/* <div className="gallery-img-cont">
            <img src="teddy-package.jpg" alt="Teddy Package"/>
            <h2 className="item-title">Teddy Package</h2>
            <p className="item-price">₦30,000</p>
        </div> */}
      </div>
    </div>
    
  )
}

function GalleryComp(){
  return(
    <QueryClientProvider client={queryClient}>
        <GallerySubComp />
    </QueryClientProvider>  
  ) 
}

export default GalleryComp