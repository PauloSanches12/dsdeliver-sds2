import React from 'react';
import styles from './styles';
import { View, ScrollView } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

const Orders: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container} >
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

export default Orders;
