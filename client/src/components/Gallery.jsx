import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useDispatch } from "react-redux";
import { clicked } from '../store/cartItemsSlice';
import "../Styles/galleryStyles.css";

const queryClient = new QueryClient();

const GallerySubComp = () => {

  const [added, setAdded] = useState(false);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setAdded(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [added]);
  
  const dispatch = useDispatch();

  // Mutation for fetching images
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ["getProducts"],
    queryFn: async() =>{
      const response = await fetch("https://ellora.onrender.com/images");
      return await response.json();
    }
    
  });
  if(isLoading){
      return(
        <p>Fetching products...Please wait</p>
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
      <p className="gallery-description">All varieties of gift boxes, treat boxes and bouquets available</p>
      <div className="gallery">
        {data.gallery.map((product, index) => (        
          <div className="gallery-img-cont" key={index}>
            <img src={product.imgUrl} alt={product.productName} />
            <h2 className="item-title">{product.productName}</h2>
            <p className="item-price">₦{product.productPrice}</p>
            <div>
              <button className="product-button" onClick={() =>{
                setAdded(true);
                {dispatch(clicked(product))}
              }}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-success" style={{display: added ? "block" : "none"}}>Added to Cart!</div>
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