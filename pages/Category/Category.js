import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guitar Category</Text>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image
            source={require('../../assets/guitar1.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>Electric Guitars</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/guitar1.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>Acoustic Guitars</Text>
        </View>
        <View style={styles.item}>
          <Image
            source={require('../../assets/guitar1.png')}
            style={styles.itemImage}
          />
          <Text style={styles.itemTitle}>Classical Guitars</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  item: {
    alignItems: 'center',
  },
  itemImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 50,
    margin:10
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Category;