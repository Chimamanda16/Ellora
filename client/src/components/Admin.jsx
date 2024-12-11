import "../Styles/adminStyles.css"
function AdminComp(){
    return(
        <div className='admin'>
            <h1 className="admin-title">Upload new Product</h1>
            <form action="/add-product" className="upload-form">
                <input type="file" name="productImg" id=""  className="upload-input"/>
                <input type="text" name="productName" placeholder='Product Name' className="upload-input"/>
                <input type="text" name="productPrice" placeholder='Product Price' className="upload-input"/>
                <button type="submit"className="upload-button">Add Product</button>
            </form>
        </div>
    )
}

export default AdminComp;