import "./styles/catalog.css";
import Product from "../components/product";

function Catalog() {
    return (
    <div className="content">
        <div>
            <h1>This is where the catalog is going to be</h1>
        </div>
        <div>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    </div>
    );
}

export default Catalog;