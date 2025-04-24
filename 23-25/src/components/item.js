import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Item = ({item}) => {
    return (
        <View style={styles.itmeContainer}>
            <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itmeContainer: {
      width: '100%',
      height: 130,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
    },
    image:{
        width: 100,
        height: "90%",
        borderRadius: 8,
        marginTop: 5,
    },
    textContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '70%'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 12,
        color: '#22D4FF',
    },
    description: {
        fontStyle: 'italic',
    },
    price: {
        fontWeight: 'bold',
        marginTop: 5,
        backgroundColor: '#384053',
        color: '#fff',
        borderRadius: 100,
        paddingHorizontal: 5,
        fontSize: 12,
        width: 75,
        height: 25,
        textAlign: 'center',
    }
});

export default Item