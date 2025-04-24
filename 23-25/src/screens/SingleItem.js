import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const SingleItem = ({navigation, route:{params: {item}}}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.textHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.name}>{item.price}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    imageContainer: {
        width: '90%',
        height: 400,
        borderRadius: 12,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    textHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 35,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#070639'
    },
    description: {
        width: '90%',
        marginTop: 35,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#22D4FF',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 20,
        width: 200,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    }
})


export default SingleItem;