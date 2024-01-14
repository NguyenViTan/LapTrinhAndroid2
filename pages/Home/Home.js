import React, { useEffect, useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home() {
    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleProductPress = (product) => {
        navigation.navigate('SingleProduct', { product });
    };
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(function (response) {
                
                setProducts(response.data);
            })
            
    };
    const handleSearchKeywordChange = (keyword) => {
        setSearchKeyword(keyword);
      };
   
    return (
        <View>
      <ScrollView>
        <Text style={styles.titles}>Welcome to My Shop </Text>
      
        <Image  style={{height:190}}source={require('../../assets/ao.png')}  />
    
        <View style={styles.catetitle}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>
            All Product
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <Text
                style={{ fontSize: 15, color: 'black', paddingRight: 20, fontWeight: '600' }}
              >
                More view
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchKeyword}
          onChangeText={handleSearchKeywordChange}

        />
 

        <View style={styles.container}>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchKeyword.toLowerCase())
            )
            .map((product) => (
              <TouchableOpacity
                style={styles.item}
                key={product.id}
                onPress={() => handleProductPress(product)}
              >
                <View>
                  <Image style={styles.img} source={{ uri: product.image }} />
                </View>
                <View style={styles.des}>
                  <Text style={styles.des_text}>{product.title}</Text>
                  <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>Rating: </Text>
                    <FontAwesome name="star" style={styles.starIcon} />
                    <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                    <Text style={styles.ratingCount}>({product.rating.count})</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
       
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    btn:{
      backgroundColor:'blue',
      flex:1,
      color:'white'
    },
   
    catetitle: {
        flexDirection: 'row',
justifyContent: 'space-between',
        marginTop: 30,
        marginBottom:20
        
    },
    item: {
        width: '48%',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    img: {
        width: '100',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
  
    des: {
        padding: 8,
    },
    des_text: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 14,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    titles:{
        fontSize:25,
        margin:20,
        color:'black',
        textAlign:'center'
    },
    ratingText: {
        color: 'black',
    },
    starIcon: {
        color: 'gold',
        fontSize: 16,
        marginRight: 2,
    },
    ratingValue: {
        color: 'black',
        marginRight: 2,
    },
    ratingCount: {
        color: 'black',
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
});