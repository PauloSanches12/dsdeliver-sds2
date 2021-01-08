import OrderLocation from './components/OrderLocation';
import OrderSummary from './components/OrderSummary';
import ProductsList from './components/ProductsList';
import { OrderLocationdata, Product } from './types';
import api, { saveOrder } from '../../services/api';
import StepsHeader from './components/StepsHeader';
import { useEffect, useState } from 'react';
import { checkSelected } from './helpers';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import './styles.css';

const Orders: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0);

  useEffect(() => {
    api().then(response => setProducts(response.data)).catch(() => {
      toast.warning('Erro ao listar produtos');
    })
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkSelected(selectedProducts, product);
  
    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader/>
        <ProductsList onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts} products={products}/>
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice} onSubmit={handleSubmit} />
      </div>
      <Footer/>
    </>
  );
}

export default Orders;
