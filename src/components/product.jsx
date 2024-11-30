import "./styles/product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useState } from "react";
import GlobalContext from "../context/globalContext";

function Product(props){

    const context=useContext(GlobalContext);

    const [quantity, setQuantity]=useState(1);

    function handleQuantityChange(newQuantity){
        setQuantity(newQuantity);
    }
    //console.log(props)

    return(
        <div className="product">
            <span className="id">ID: {props.data._id}</span>
            <img src={props.data.image} alt=""/>
            <h3>{props.data.title}</h3>

            <div className="prices">
                <label className="total">${(props.data.price*quantity).toFixed(2)}</label>
                <label className="unit">${props.data.price.toFixed(2)}</label>
            </div>

            <div className="parent">
                <QuantityPicker onChange={handleQuantityChange}/>
                <button className="btn btn-sm btn-success" onClick={context.addToCart}>Add</button>
            </div>
        </div>
    );
}

export default Product;