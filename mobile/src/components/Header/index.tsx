import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={ styles.container }>
      <Image source={require('../../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

export default Header;