import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IconComp = (props) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (props.screenName) {
            navigation.navigate(props.screenName);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <MaterialCommunityIcons name={props.iconName} size={24} color="#22D4FF" />
                </View>
                <Text style={styles.iconText}>{props.iconText}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: "#384053",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    iconText: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center'
    },
    container: {
        width: 60,
        height: 80,
        alignItems: 'center'
    }
});

export default IconComp;