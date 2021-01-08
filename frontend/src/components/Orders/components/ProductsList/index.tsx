import { Product } from "../../types";
import ProductCard from "../ProductCard"

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
