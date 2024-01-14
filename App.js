import React from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import store from './pages/Store/store';
import Product from './pages/Product/Product';
// import Header from './component/Header';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { Provider } from 'react-redux';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  return (
   
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
   
      <NavigationContainer  >
      <Provider  store={store}>
      
        <Stack.Navigator  initialRouteName="Home"  >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: 'Home' }} // Thay đổi tiêu đề hiển thị  
          />    
               
          <Stack.Screen name="SingleProduct" component={ProductDetail} options={{ headerTitle: 'Product Detail' }} />
          <Stack.Screen name="Category" component={Category} options={{ headerTitle: 'Category' }} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerTitle: 'Menu' }} />
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: 'Login' }} />
          <Stack.Screen name="Product" component={Product} options={{ headerTitle: 'Product' }} />


         
        </Stack.Navigator>

        
        </Provider>
      <Menu></Menu>
      </NavigationContainer>
    </View>
    
  );
};