import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,incrementQuantity,decrementQuantity,removeFromCart } from '../Cart';

const ProductDetail = () => {

  const cart=useSelector((state)=>state.cart.cart );
  console.log(cart);
  const dispatch=useDispatch();
  const route = useRoute();
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(parseInt(value), 1);
    setQuantity(newQuantity);
  };
const addItemToCart=(product)=>{
  dispatch(addToCart(product));
}
const removeItemFromCart =(product)=>{
  dispatch(removeFromCart(product));
}
const increaseQuantity = (product) => {
  dispatch(incrementQuantity(product));
}
const decreaseQuantity = (product) => {
  if(product.quantity == 1){
    dispatch(removeFromCart(product));
  }else{
    dispatch(decrementQuantity(product));
  }
}
const sumQuantity = () => {
  let sum = 0;
  cart.forEach((product) => {
    sum += product.quantity * product.price;
  });
  return sum;
};
  return (
    <ScrollView style={styles.titles}>
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Giá: {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: </Text>
        {Array.from({ length: Math.floor(product.rating.rate) }).map((_, index) => (
          <Text key={index} style={styles.starIcon}>⭐</Text>
        ))}
        <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
        <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
      </View>
      <View style={styles.buyContainer}>
        {cart.some((value)=>value.id==product.id)?
        (
          <Pressable style={styles.buyButton}  onPress={()=>removeItemFromCart (product)} >
          <Text >Xóa khỏi giỏ hàng</Text>
        </Pressable>
        ):(
        <Pressable style={styles.buyButton}  onPress={()=>addItemToCart(product)} >
          <Text  >Thêm vào giỏ hàng</Text>
        </Pressable>
        )}
        
      </View>
      <Text style={styles.cart}> Giỏ Hàng</Text>
      {cart.map((product,index) => (
        <View  key={index}>
          <Text>{product.name}</Text>
          <Image style={{ width: 100, height: 100, borderRadius: 20,marginTop:6 }}
              source={{ uri: product.image }}/>
               <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Price: {product.price.toFixed(2)}</Text>
          <Pressable
            style={{
              flexDirection: "row",
              marginTop:20,
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 120,
            }}
          >
            <Pressable onPress={() => decreaseQuantity(product)}>
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {product.quantity}            
              </Text>
            </Pressable>
            <Pressable onPress={() => increaseQuantity(product)}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,                 
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>  
          </View>         
             ))}           
    </View>
    <Text style={styles.cart}>Tổng tiền: {sumQuantity().toFixed(2)} VNĐ</Text>
 

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 250,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:20,
    textAlign: 'center',
    
  },
  cart: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:20,
    textAlign: 'center',
    color:"black"

  },
  titles: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:20,
    textAlign: 'center',
   
 
  },
  price: {
    fontSize: 25,
    marginBottom: 12,
    color:'red'
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginRight: 4,
  },
  starIcon: {
    fontSize: 16,
  },
  ratingValue: {
    fontWeight: 'bold',
    marginRight: 2,
  },
  ratingCount: {
    marginLeft: 4,
  },
  buyContainer: {
    flexDirection: 'row',
  
    alignItems: 'center',
  },
  quantityInput: {
    width: 60,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  buyButton: {
backgroundColor: 'yellow',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductDetail;