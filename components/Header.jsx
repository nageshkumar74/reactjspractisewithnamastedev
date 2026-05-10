import AddToCart from "./AddToCart";

const Header=()=>{

    return (
        <div>


<header className="header">
  <div className="logo">MyShop</div>

  <nav className="nav">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
  </nav>

 <AddToCart/>
</header>
        </div>
    )
}

export default Header;