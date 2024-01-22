
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Menu({ activeMenuItem, onMenuItemPress }) {
    const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Home' && styles.activeMenuItem,
        ]}
        onPress={() => navigation.navigate('Home')}
      >


        <Icon name="home" size={30} color="black" />
       
      </TouchableOpacity>


      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Product' && styles.activeMenuItem,
        ]}
        onPress={() => navigation.navigate('Product')}
      >
          <Icon name="shopping-cart" size={30} color="black" />
       
      </TouchableOpacity>

          
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Category' && styles.activeMenuItem,
        ]}
        onPress={() => navigation.navigate('Category')}
      >
        <Icon name="folder-open" size={30} color="black" />
       
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Login' && styles.activeMenuItem,
        ]}
        onPress={() => navigation.navigate('Login')}
      >
        <Icon name="user" size={30} color="black" />
        
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
  },
  menuItem: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  activeMenuItem: {
    backgroundColor: '#e0e0e0',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;