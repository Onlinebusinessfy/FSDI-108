import { useState } from "react";
import "./styles/admin.css"

function Admin(){
    const [allProducts, setallProducts]=useState([]);
    const [allCoupons, setallCoupons]=useState([]);
    const[coupon, setCoupon]=useState({
        code:'', //not required
        discount:'',
    });

    const[product,setProduct]=useState({
        title:'',
        category:'',
        image:'',
        price:'',
    })


    function handleCouponInput(e){
        // console.log("Value change",e.target.value)
        const val=e.target.value;
        const name=e.target.name;
        // setCoupon({code:val,
        // discount:coupon.discount
        // });
        // rule for state variables (if array or obj -> 3 steps)
        // create a copy
        let copy={...coupon}
        // modify the copy
        if(name==="discount"){
            copy.discount=val;
        }else{
            copy.code=val;
        }
        // set the copy back
        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon);
        var copy=[...allCoupons];
        copy.push(coupon);
        setallCoupons(copy);
    }

    function handleProductInput(e){
        const val=e.target.value;
        const name=e.target.name;

        let copy={...product};
        copy[name]=val;
        setProduct(copy);
    }

    function saveProduct(){
        console.log(product);
        var copy=[...allProducts];
        copy.push(product);
        setallProducts(copy);
    }

    return(
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className="parent">

                <div className="products form">
                    <h3>Create Products</h3>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={handleProductInput} name="title"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" onChange={handleProductInput} name="category"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" onChange={handleProductInput} name="image"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onChange={handleProductInput} name="price"/>
                    </div>

                    <div className="mb-5 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveProduct}>Save Product</button>
                    </div>

                    <ul className="product-list">
                        {allProducts.map(prod => 
                            <li>
                                <img className="prod-img" src={prod.image} alt="" />
                                {prod.title} - ${parseFloat(prod.price).toFixed(2)}
                            </li>
                        )}
                    </ul>

                </div>

                <div className="coupons form">
                    <h3>Create Coupons</h3>

                    <div className="mb-3">
                        <label className="form-label">Code</label>
                        <input type="text" className="form-control" onChange={handleCouponInput} name="coupon"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Discount</label>
                        <input type="number" className="form-control" onChange={handleCouponInput} name="discount"/>
                    </div>
                    <div className="mb-3 btn-container">
                        <button className="btn btn-outline-dark" onClick={saveCoupon}>Save Coupons</button>
                    </div>
                    <ul className="coupon-list">
                        {allCoupons.map(cp => 
                            <li className="coupon-item">
                                {cp.code} - {cp.discount}%
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Admin;