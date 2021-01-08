import { checkSelected } from "../../helpers";
import { Product } from "../../types";
import ProductCard from "../ProductCard"

interface Props {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductsList: React.FC<Props> = ({ products, onSelectProduct, selectedProducts }) => {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
          <ProductCard key={product.id} isSelected={checkSelected(selectedProducts, product)} onSelectProduct={onSelectProduct} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
