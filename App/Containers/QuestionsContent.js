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
    Button,
    ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Colors } from "../Theme/Colors";
import questions from '../Assets/data/questions.json'
import Constants from '../Constants';
import { Colors } from '../Theme';
import { getData, storeData } from '../Utils/storage';
import BottomMenu from './BottomMenu';
import HeaderWithBack from './HeaderWithBack';
import IndexItem from './IndexItem';
import QuestionItem from './QuestionItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const QuestionsContent = ({ route, navigation }) => {
    const { type } = route.params
    const questionFlatListRef = useRef(null)
    const indexFlatListRef = useRef(null)
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [dataQuestion, setDataQuestion] = useState([]);
    const indexRef = useRef(0);

    const onViewRef = useRef((viewableItems) => {
    })
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })
    async function updateData(){
        console.log('unmount');
        await storeData(type, dataQuestion)
    }
    useEffect(() => {
        console.log('mount');
        async function fetchDataQuestion() {
            let data = await getData(type)
            setDataQuestion(data)
        }
        fetchDataQuestion()
        return () => {
            updateData()
        }
    }, []);

    // const saveAnswerToStorage = async (number) => {
    //     let reviewStorage = await getData(Constants.STORAGE.REVIEW)
    //     reviewStorage[index].answer = parseInt(number)
    //     await storeData(Constants.STORAGE.REVIEW, reviewStorage)
    // }

    // const questionsOfType = questions.filter(e =>)
    const saveDataToStorage = async (number, isCorrect, index) => {
        let reviewStorage = await getData(type)
        reviewStorage[index].answer = parseInt(number)
        reviewStorage[index].isCorrect = isCorrect
        setDataQuestion(reviewStorage)
        // await storeData(type, reviewStorage)
    }
    const renderItem = ({ item, index }) => {
        return (
            <QuestionItem
                item={item}
                index={index}
                storeAnswer={dataQuestion[index].answer}
                storeData={saveDataToStorage}
            />
        );
    }

    const getItemLayout = (data, index) => (
        { length: windowWidth, offset: windowWidth * index, index }
    )

    const keyExtractor = (item) => `${item.index}`

    const onScrollEnd = (item) => {
        if (Math.round(item.nativeEvent.contentOffset.x / windowWidth) !== indexQuestion) {
            setIndexQuestion(Math.round(item.nativeEvent.contentOffset.x / windowWidth))
            // indexFlatListRef.current.scrollToIndex({ index: Math.round(item.nativeEvent.contentOffset.x / windowWidth), viewPosition: 0.5 })
        }
    }

    const onSetIndex = (index) => {
        if (questionFlatListRef.current) {
            setIndexQuestion(index)
            questionFlatListRef.current.scrollToIndex({ index: index })
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* <HeaderWithBack
                title="Toàn bộ 600 câu hỏi thi bằng B2"
                indexQuestion={indexQuestion + "/600"}
            /> */}

            {dataQuestion.length !== 0 ?
                <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ flex: 1 }}
                        removeClippedSubviews={true}
                        ref={questionFlatListRef}
                        data={questions}
                        pagingEnabled={true}
                        // onMomentumScrollEnd
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={keyExtractor}
                        horizontal={true}
                        renderItem={renderItem}
                        onMomentumScrollEnd={onScrollEnd}
                    // onScroll={item => {
                    //     if (Math.round(item.nativeEvent.contentOffset.x / windowWidth) !== indexQuestion) {
                    //         setIndexQuestion(Math.round(item.nativeEvent.contentOffset.x / windowWidth))
                    //         console.log(item.nativeEvent.contentOffset);
                    //         // indexFlatListRef.current.scrollToIndex({ index: Math.round(item.nativeEvent.contentOffset.x / windowWidth), viewPosition: 0.5 })
                    //     }

                    //     // indexFlatListRef.current.scrollToOffset({})
                    // }}
                        getItemLayout={getItemLayout}
                    >
                    </FlatList>

                    <BottomMenu
                        data={dataQuestion}
                        indexQuestion={indexQuestion}
                        setIndex={onSetIndex}
                    />
                </View>
                : <View style={{ flex: 1, justifyContent: 'center'}} >
                    <ActivityIndicator size='large' color={Colors.barGreen} />

                </View>

            }
        </SafeAreaView>
    );
};

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

export default QuestionsContent;
