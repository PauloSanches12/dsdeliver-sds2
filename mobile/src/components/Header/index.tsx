import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Header: React.FC = () => {
  
  const { navigate } = useNavigation();

  const handleOnPress = () => {
    navigate('Home');
  }
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.text}>DS Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Header;