import { useEffect, useState } from 'react';
import api from '../../services/api';
import OrderLocation from './components/OrderLocation';
import ProductsList from './components/ProductsList';
import StepsHeader from './components/StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './types';

const Orders: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();
  useEffect(() => {
    api().then(response => setProducts(response.data)).catch(error => console.log(error))
  }, [])

  return (
    <div className="orders-container">
      <StepsHeader/>
      <ProductsList products={products}/>
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
}

export default Orders;
