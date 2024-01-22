import React, { useEffect, useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

//import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home() {
    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState('');
    const handleProductPress = (product) => {
        navigation.navigate('SingleProduct', { product });
    };

    const categories = [
      {
        id: 1,
        title: 'Guitar Classic',
        products: [
          {
            id: 1,
            title: 'Đàn Guitar Classic 01',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/147/954/products/dan-guitar-ba-don-c100-7.jpg?v=1640341718510',
            price: 1500.000,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },

          },
          {
            id: 2,
            title: 'Đàn Guitar Classic 02',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/147/954/products/dan-guitar-ba-don-c100-7.jpg?v=1640341718510',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          {
            id: 3,
            title: 'Đàn Guitar Classic 03',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/147/954/products/guitar-cordoba-c1mcet-5.jpg?v=1640435428420',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          {
            id: 4,
            title: 'Đàn Guitar Classic 04',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/147/954/products/cordoba-c5ce-5-3af65450-e225-422a-ae0a-fc2ff0e8ca79.jpg?v=1640662486487',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          // Add more products in this category
        ],
      },
      {
        id: 2,
        title: 'Guitar Acoustic',
        products: [
          {
            id: 1,
            title: 'Đàn Guitar Acoustic J-120',
            image: 'https://guitarbadon.vn/wp-content/uploads/2022/08/J-120-247x247.png',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          {
            id: 1,
            title: 'Đàn Guitar Acoustic J-120',
            image: 'https://bizweb.dktcdn.net/thumb/large/100/147/954/products/martin-djr10-burst-1.jpg?v=1640765819890',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          {
            id: 1,
            title: 'Đàn Guitar Acoustic J-120',
            image: 'https://guitarbadon.vn/wp-content/uploads/2022/08/ve-70-so-1-247x247.png',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          {
            id: 1,
            title: 'Đàn Guitar Acoustic J-120',
            image: 'https://guitarbadon.vn/wp-content/uploads/2022/08/VE-85-1-247x247.png',
            price: 9.99,
            description:'Đàn Guitar Acoustic Martin DX2E Rosewood là một trong các mẫu đàn thế hệ mới tới từ thương hiệu Martin danh giá của Mỹ. Dòng đàn mới áp dụng công nghệ xử lí gỗ hiện đại độc quyền của hãng, kết hợp cùng Equalizer Fishman hàng đầu tạo nên mẫu đàn biểu diễn bán chuyên thực sự chất lượng.',
            rating: {
              rate: 4.5,
              count: 10,
            },
          },
          // Add more products in this category
        ],

      },
     
      // Add more categories as needed
    ];

    
    const handleSearchKeywordChange = (keyword) => {
        setSearchKeyword(keyword);
      };
    return (
        <View>
      <ScrollView>
        <Text style={styles.titles}>Guitar Sol Thăng T-an</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          value={searchKeyword}
          onChangeText={handleSearchKeywordChange}
        />
        <Image  style={{height:200}}source={require('../../assets/bg.png')}  />
        <View style={styles.catetitle}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>
           Guitar Acoustic
          </Text>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Product')}>
              <Text
                style={{ fontSize: 15, color: 'black', paddingRight: 20, fontWeight: '600' }}
              >
                Xem thêm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
  <ScrollView>
    {/* Render categories */}
    {categories.map((category) => (
      <View key={category.id}>
        <Text style={styles.titles}>
          {category.title}
        </Text>
        <View style={styles.container}>
          {/* Render products in the category */}
          {category.products
            .filter((product) =>
              product.title.toLowerCase().includes(searchKeyword.toLowerCase())
            )
            .map((product) => (
              <TouchableOpacity
                style={styles.item}
                key={product.id}
                onPress={() => handleProductPress(product)}
              >
                {/* Render product details */}
                <View>
                  <Image style={styles.img} source={{ uri: product.image }} />
                </View>
                <View style={styles.des}>
                  <Text style={styles.des_text}>{product.title}</Text>
                  <Text style={styles.price}>Price: {product.price.toFixed(2)}</Text>
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
      </View>
    ))}
  </ScrollView>
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
        color: 'red',
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