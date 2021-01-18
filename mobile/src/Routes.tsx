import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './components/Home';
import Orders from './components/Orders';

const { Navigator, Screen } = createStackNavigator();


const Routes: React.FC = () => {
  return (
      <NavigationContainer>
          <Navigator headerMode="none" screenOptions={{ 
              cardStyle: {
                  backgroundColor: '#FFF'
              }
           }}>
              <Screen name="Home" component={Home} />
              <Screen name="Orders" component={Orders} />
          </Navigator>
      </NavigationContainer>
  );
}

export default Routes;