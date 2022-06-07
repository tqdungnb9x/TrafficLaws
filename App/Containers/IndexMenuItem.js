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
    Button,
    PixelRatio
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Colors } from "../Theme/Colors";
import Constants from '../Constants';
import { Colors } from '../Theme';
import { getData, storeData } from '../Utils/storage';
import { areEqualShallow } from '../Utils/logic';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class IndexMenuItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.selected !== this.props.selected || !areEqualShallow(nextProps.item, this.props.item);
    }
    render() {
        const itemWidth = windowWidth / 6 - 10
        const { item, setIndex, selected, index } = this.props
        // console.log("IndexMenuItem", item.index, selected);
        let color
        if (item.isCorrect === null) {
            color = Colors.lightBlueGrey
        } else {
            if (item.isCorrect === true) {
                color = Colors.lightGreen
            } else {
                color = Colors.coral
            }
        }
        return (
            <TouchableOpacity
                style={{ ...selected ? styles.selected : styles.unselected, borderWidth: 5, backgroundColor: color, margin: 5, borderRadius: itemWidth / 2, width: itemWidth, height: itemWidth, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setIndex(index)}
            >
                <Text style={{ fontSize: 15 }}>{item.index + 1}</Text>
                {/* {item.answer != 100 && <View
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: itemWidth/3,
                        width: itemWidth/3,
                        borderRadius: itemWidth/6,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems:'center'
                    }}
                >
                    <Text adjustsFontSizeToFit={true} style={{fontSize: 40}} >{item.answer}</Text>
                </View>} */}
            </TouchableOpacity>
        )
    }
}

export default IndexMenuItem;

const styles = StyleSheet.create({
    selected: {
        borderColor: Colors.yellow,
    },
    unselected: {
        borderColor: Colors.white,
    }
});
