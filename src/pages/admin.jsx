import "./styles/admin.css"

function Admin(){
    return(
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="image" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control"/>
                    </div>

                    <div className="mb-5 btn-container">
                        <button className="btn btn-outline-dark">Save Product</button>
                    </div>

                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>

                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="mb- btn-container">
                        <button className="btn btn-outline-dark">Save Coupons</button>
                    </div>
                    <div className="img-coupon">
                        <img src="https://cdn-icons-png.flaticon.com/512/1041/1041885.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Admin;