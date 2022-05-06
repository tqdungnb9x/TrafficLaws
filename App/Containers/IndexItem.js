import React, { useEffect, useRef, useState, PureComponent, Component } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    useColorScheme,
    View,
    Dimensions,
    Button
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Colors } from "../Theme/Colors";
import Constants from '../Constants';
import { Colors } from '../Theme';
import { getData, storeData } from '../Utils/storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class IndexItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.hasSelectedIndex !== this.props.hasSelectedIndex;
    }
    render() {
        const { item, index, setIndex, hasSelectedIndex } = this.props
        return (
            <TouchableOpacity style={{
                width: windowWidth / 5,
                backgroundColor: hasSelectedIndex ? '#008000' : Colors.green,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: hasSelectedIndex ? 3 : undefined,
                borderBottomColor: hasSelectedIndex ? "red" : undefined
            }}
                onPress={() => {
                    setIndex(index)
                }}
            >
                <Text style={{ ...styles.indexText, color: hasSelectedIndex ? Colors.white : Colors.borderPhoneInput, }}>
                    CÂU {item}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default IndexItem;

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    questionText: {
        fontSize: 18,
        fontWeight: "900",
        color: 'black',
    },
    answerText: {
        fontSize: 18,
        color: 'black',
    },
    indexText: {
        fontSize: 13
    }
});
