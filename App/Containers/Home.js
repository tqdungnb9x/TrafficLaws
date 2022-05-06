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
import Icon from 'react-native-ionicons'

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Colors } from "../Theme/Colors";
import questions from '../Assets/data/questions.json'
import Constants from '../Constants';
import { RouterName } from '../Navigator/RouterName';
import { Colors } from '../Theme';
import { getData, storeData } from '../Utils/storage';
import BottomMenu from './BottomMenu';
import HeaderWithBack from './HeaderWithBack';
import IndexItem from './IndexItem';
import QuestionItem from './QuestionItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
    // const dataQuestion = useRef()
    // const [dataQuestion, setDataQuestion] = useState(Cons);

    // useEffect(() => {
    //     async function fetchDataQuestion() {
    //         let data = await getData(Constants.STORAGE.REVIEW)
    //         setDataQuestion(data)
    //     }
    //     fetchDataQuestion()
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.AllQuestion, {type: '166'})
                }}
            >  
                <Icon name='book' />
                <Text>Ôn tập câu hỏi</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.TipsTheory)
                }}
            >
                                <Icon name='pricetag' />

                <Text>Các mẹo ghi nhớ</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={ () => {
                    navigation.navigate(RouterName.TipsPractice)
                }}
            >
                <Text>Tips</Text>
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

export default Home;
