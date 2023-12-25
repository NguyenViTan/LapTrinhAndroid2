import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';

import { useEffect,useState } from 'react';









function Category() {
        const [fake,setFake]=useState([]);
        // console.log(fake);
        useEffect(()=>{
         fakestore();
         },[])
         const fakestore=async()=>{
         const response=await fetch("https://fakestoreapi.com/products/categories");
        console.log(response);
        const jsonData=await response.json();
        setFake(jsonData);
         }
    return (
            <ScrollView horizontal>
            {
        fake.map((values)=>{     
             
            return(
                <View style={styles.productItem}>
             
                <Text style={styles.productName}>{values.name}</Text>
               
              
                </View> 
            )
        })
      }
            </ScrollView>
         
 
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
     
    },

    logo: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    productItem: {
        alignItems: 'center',
        marginTop:200,
        marginRight: 16,
      },
      productImage: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 8,
      
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      productPrice: {
        fontSize: 14,
        color: 'red',
        marginBottom:10,
        fontSize:20
      },
});

export default Category;