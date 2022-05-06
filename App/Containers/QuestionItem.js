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
import { areEqualShallow } from '../Utils/logic';
import _, { debounce } from 'lodash';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Answer = ({ answer, index, selectedAnswer, correct, onAnswer }) => {
    var color, iconName, check;
    if (selectedAnswer == index) {
        if (index == correct) {
            iconName = "numeric-" + index + "-circle"
            color = Colors.green
            check = "check"
        } else {
            iconName = "numeric-" + index + "-circle"
            color = Colors.red
            check = "close"
        }
    } else {
        iconName = "numeric-" + index + "-circle-outline"
        color = Colors.black
        check = ""
    }
    // if (selectedAnswer != 0) {
    //     if (correct != index) {
    //         if (selectedAnswer == index) {
    //             iconName = "numeric-" + index + "-circle"
    //             color = Colors.red
    //             check = "close"
    //         } else {
    //             iconName = "numeric-" + index + "-circle-outline"
    //             color = Colors.black
    //             check = ""
    //         }
    //     } else {
    //         iconName = "numeric-" + index + "-circle"
    //         color = Colors.green
    //         check = "check"
    //     }
    // } else {
    //     iconName = "numeric-" + index + "-circle-outline"
    //     color = Colors.black
    //     check = ""
    // }
    const onDebouncePress = debounce(() => (onAnswer && onAnswer()), 1000, { leading: true, trailing: true })

    return (
        <TouchableNativeFeedback onPress={onDebouncePress} >
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.borderColorBox, paddingVertical: 5 }} >
                <Icon style={{ marginRight: 5 }} name={iconName} size={30} color={color} />
                <Text style={{ ...styles.answerText, flex: 1, color: color }}>
                    {answer}
                </Text>
                {check !== "" ? <Icon style={{}} name={check} size={25} color={color} />
                    : <View style={{ width: 25 }} />
                }
            </View>
        </TouchableNativeFeedback>
    )
}

class QuestionItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !_.isEqual(nextState.selectedAnswer, this.state.selectedAnswer)
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: this.props.storeAnswer
        }
    }

    // componentDidUpdate(){
    //     console.log('update');
    //     this.setState({
    //         selectedAnswer: this.props.storeAnswer
    //     })
    // }

    render() {
        const { item, storeData, index } = this.props
        const { selectedAnswer } = this.state
        let answer, length
        // console.log("QuestionItem", index);

        if (item.a4 !== null) {
            length = 4
        } else if (item.a3 !== null) {
            length = 3
        } else length = 2

        if (item.answer > length) {
            answer = length
        } else answer = item.answer
        

        const onSelectAnswer = async (number) => {
            this.setState({ selectedAnswer: number })
            console.log('check', number, number == answer, index);
            storeData(number, number == answer, index)
        }

        return (
            <ScrollView style={{ width: windowWidth - 20, margin: 10, flexDirection: 'column' }}>
                <Text style={{ ...styles.questionText, borderBottomWidth: 1, borderBottomColor: Colors.borderColorBox, paddingBottom: 10, }}>
                    {item.index}. {item.question}
                </Text>
                <View />
                <Answer answer={item.a1} index={1} selectedAnswer={selectedAnswer} correct={answer} onAnswer={() => onSelectAnswer(1)} />
                {item.a2 !== null && <Answer answer={item.a2} index={2} selectedAnswer={selectedAnswer} correct={answer} onAnswer={() => onSelectAnswer(2)} />}
                {item.a3 !== null && <Answer answer={item.a3} index={3} selectedAnswer={selectedAnswer} correct={answer} onAnswer={() => onSelectAnswer(3)} />}
                {item.a4 !== null && <Answer answer={item.a4} index={4} selectedAnswer={selectedAnswer} correct={answer} onAnswer={() => onSelectAnswer(4)} />}
                {selectedAnswer == item.answer && <View style={{ marginTop: 10, padding: 10, borderWidth: 1, borderRadius: 6, borderColor: Colors.green }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                        <Icon name={"lightbulb-on"} size={30} color={Colors.green} />
                        <Text style={styles.questionText}>Đáp án đúng: {item.answer}</Text>
                    </View>
                    <View style={{ padding: 5, borderRadius: 6, backgroundColor: Colors.teaGreen }}>
                        <Text style={styles.answerText}>Giải thích: {item.explanation}</Text>
                    </View>
                </View>}
            </ScrollView>
        )
    }
}


export default QuestionItem;

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
