import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';

import store from './pages/Store/store';
// import Header from './component/Header';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

export default function App() {
  return (
   
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
 
      <NavigationContainer >
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home"  >
       
          <Stack.Screen
            
            name="Home"
            component={Home}
            options={{ headerTitle: 'Trang chủ' }} // Thay đổi tiêu đề hiển thị
            
          />
           
          <Stack.Screen name="SingleProduct" component={ProductDetail} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
       
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </View>
   
  );
};