import React from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import IconComp from '../components/IconComp';
import Item from '../components/item.js';
import data from '../data/products.json';



class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount(){
       this.setState({
            products: data
        });
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.sliderContainer}>
                    <Swiper
                        autoplay
                        activeDotColor="#22D4FF"
                        autoplayTimeout={5}
                    >
                        <View style={styles.item}>
                            <Image 
                                source={{uri: 'https://picsum.photos/800/600?random=5'}}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={{uri: 'https://picsum.photos/800/600?random=4'}}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={{uri: 'https://picsum.photos/800/600?random=1'}}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={{uri: 'https://picsum.photos/800/600?random=3'}}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.item}>
                            <Image 
                                source={{uri: 'https://picsum.photos/800/600?random=6'}}
                                style={styles.imgItem}
                                resizeMode="cover"
                            />
                        </View>
                    </Swiper>
                </View>
                
                <View style={styles.iconsContainer}>
                <IconComp iconName="cellphone" iconText="Iphone" screenName="IOS"/>
                <IconComp iconName="android" iconText="Samsung" screenName="Samsung" />
                <IconComp iconName="laptop" iconText="Llaptop" screenName="Laptop" />
                </View>

                <View style={styles.iconsContainer}>
                <IconComp iconName="tablet" iconText="Tablet" screenName="Tablet" />
                <IconComp iconName="mouse" iconText="Mouse" screenName="Mouse" />
                <IconComp iconName="keyboard" iconText="Keboard" screenName="Keyboard" />
                </View>

                <View style={styles.productContainer}>
                    <Text style={styles.title}>Most Popular Products</Text>
                    <FlatList
                        data={this.state.products.PopularProducts}
                        renderItem={({item}) => 
                        (
                            <View>
                                <Item item={item} />
                            </View>
                        )}
                    />

                </View>
    
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
 
    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 8
    },
 
    imgItem: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
 
    item: {
        flex: 1,
        justifyContent: 'center'
    },
 
    iconsContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    productsContainer: {
        marginHorizontal: 20,
    },
 
 
});
 
export default Home;