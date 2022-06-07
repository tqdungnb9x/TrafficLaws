import React, { useEffect, useRef, useState } from 'react';
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
import questions from '../Assets/data/questions.json'
import Constants from '../Constants';
import { RouterName } from '../Navigator/RouterName';
import { Colors } from '../Theme';
import { getData, storeData } from '../Utils/storage';
import BottomMenu from './BottomMenu';
import IndexItem from './IndexItem';
import QuestionItem from './QuestionItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReviewQuestions = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.AllQuestion, {type: '166'})
                }}
            >
                <Text>Ôn tập câu hỏi</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.TipsPractice)
                }}
            >
                <Text>Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.TipsTheory)
                }}
            >
                <Text>Các mẹo ghi nhớ</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    item: {
        width: windowWidth/3,
        height: (windowHeight)/3,
        backgroundColor: 'red'
    }
});

export default ReviewQuestions;
