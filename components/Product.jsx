import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../redux-toolkit/Slice";
const Product =()=>{
    const dispatch=useDispatch();
return (
    <div className="product">
    <img src="https://picsum.photos/200/200"  alt="Product Image" className="product-image"/>
    <h3>Product 1</h3>
    <div className="product-details">
        <p>Price: $10.00</p>
        <p>Description: This is a sample product.</p>
        <button className="btn" onClick={()=>dispatch(addItem())}>Add to Cart</button>
        <button className="btn remove-button" onClick={()=>dispatch(removeItem())}>Remove item</button>

    </div>
    </div>

)
}
export default Product;