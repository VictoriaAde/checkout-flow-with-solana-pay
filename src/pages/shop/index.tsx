import Products from "../../components/Products";
import Navbar from "../../components/Navbar";

export default function ShopPage() {
  return (
    <div className="px-6">
      <Navbar>Choco</Navbar>
      <Products submitTarget="/shop/checkout" enabled={true} />{" "}
    </div>
  );
}
