import "./Header.css";
import Product from "../product/Product";
function Header(props) {
  return (
    <div className="header">
      <h1>Header Component</h1>
      <Product />
    </div>
  );
}

export default Header;
