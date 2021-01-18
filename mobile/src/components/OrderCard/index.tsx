import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

const OrderCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>Pedido 1</Text>
        <Text style={styles.orderPrice}>R$ 20,00</Text>
      </View>
      <Text style={styles.text}>Há 30 min.</Text>
      <View style={styles.productsList}>
        <Text style={styles.text}>Pizza Calabresa</Text>
        <Text style={styles.text}>Pizza Calabresa</Text>
        <Text style={styles.text}>Pizza Calabresa</Text>
      </View>
    </View>
  );
}


export default OrderCard;
