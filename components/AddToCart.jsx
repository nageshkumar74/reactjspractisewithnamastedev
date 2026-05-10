import { useSelector } from "react-redux";
const AddToCart=()=>{
    const count=useSelector((state)=>state.cart.value)
return (
    <div className="cart">
    <img src="https://via.placeholder.com/150" alt="Product Image" className="product-image"/>
    <span className="cart-count">{count}</span>
 

    <h3>Product 1</h3>
 </div>
)   
}
export default AddToCart;