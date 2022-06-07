import { Colors, Fonts, Images, Strings } from '../Theme';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { Component, PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class HeaderWithBack extends PureComponent {
    goBack = () => {
        const { navigation } = this.props
        console.log('back');
        navigation.pop()
    }

    render() {
        const {title, indexQuestion} = this.props;
        return (
            <View style={{ flexDirection: 'row', height: 60, alignItems:'center', width: windowWidth, backgroundColor: Colors.barGreen, paddingHorizontal: 5}}>
                <TouchableOpacity style={{ justifyContent:'center', alignItems: 'flex-start', width: 50}} onPress={() => this.goBack()}>
                    <Icon name={"arrow-left"} size={30} color={'white'} />
                </TouchableOpacity>
                <Text numberOfLines={1} style={{fontSize: 18, color: 'white', flex: 1, paddingRight: 20}}>{title}</Text>
                {!!indexQuestion && <Text numberOfLines={1} style={{fontSize: 16, color: 'white',}}>Câu {indexQuestion}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    signUpText: {
        fontSize: 18,
        color: 'white',
    },
});

export default HeaderWithBack;
