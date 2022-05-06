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

const ListQuestion = ({ navigation }) => {
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
            <TouchableNativeFeedback >
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.borderColor,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: Colors.slateGrey
                    }}>Toan bo </Text>
                    <Text style={{
                        fontSize: 14,
                        color: Colors.darkGrey
                    }}>Toan bo 600</Text>
                </View>
            </TouchableNativeFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    item: {
        width: windowWidth / 3,
        height: (windowHeight) / 3,
        backgroundColor: 'red'
    }
});

export default ListQuestion;
