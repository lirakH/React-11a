import React from "react";
import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";
import data from '../data/products.json';
import Item from '../components/item.js';


class IOS extends React.Component {

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
        <Text style={styles.text}>IOS</Text>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. </Text>
        <FlatList
            data={this.state.products.ios}
            renderItem={({item}) => 
            (
                <View>
                    <Item item={item} />
                </View>
            )}
        />
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20
  },
  desc: {
      marginBottom: 20
  }
});




export default IOS;