import { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import "../Styles/adminStyles.css";

const queryClient = new QueryClient();

const SubComp = function() {
    // Single source of truth for form
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    // Mutation for fetching images
    const fetchImgMutation = useMutation({
        mutationFn: async () => {
            const response = await fetch("http://localhost:5000/add-products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "productName",
                    price: "productPrice",
                }),
            })
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return await response.json();
        },
        onSuccess: (data) => {
            console.log("Data fetched successfully:", data);
        },
        onError: (error) => {
            console.error("Error fetching data:", error.message);
        }
    });

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Request received in frontend");
        fetchImgMutation.mutate(); // Trigger the mutation
    }

    // Form component
    return (
            <div className="admin">
                <h1 className="admin-title">Upload new Product</h1>
                <form className="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="file"
                        name="productImg"
                        className="upload-input"
                        required
                    />
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        className="upload-input"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        name="productPrice"
                        placeholder="Product Price"
                        className="upload-input"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                    <button type="submit" className="upload-button">
                        Add Product
                    </button>
                </form>
                {fetchImgMutation.isLoading && <p>Loading...</p>}
                {fetchImgMutation.isError && (
                    <p>Error: {fetchImgMutation.error.message}</p>
                )}
                {fetchImgMutation.isSuccess && (
                    <div className="w-3/4 m-auto text-center">
                        <p>{JSON.stringify(fetchImgMutation.data)}</p>
                    </div>
                )}
            </div>
    );
};

export default function AdminComp(){
    return(
        <QueryClientProvider client={queryClient}>
            <SubComp />
        </QueryClientProvider>
    )
};
