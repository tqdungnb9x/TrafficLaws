import { useFocusEffect } from '@react-navigation/native';
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
import { Colors, Metrics } from '../Theme';
import { getData, getProgress, storeData } from '../Utils/storage';
import BottomMenu from './BottomMenu';
import IndexItem from './IndexItem';
import QuestionItem from './QuestionItem';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListQuestion = ({ route, navigation }) => {
    // const dataQuestion = useRef()
    // const [dataQuestion, setDataQuestion] = useState(Cons);

    // useEffect(() => {
    //     async function fetchDataQuestion() {
    //         let data = await getData(Constants.STORAGE.REVIEW)
    //         setDataQuestion(data)
    //     }
    //     fetchDataQuestion()
    // }, []);
    const [progress, setProgress] = useState(new Object());
    useFocusEffect(
        React.useCallback(() => {
            async function fetchDataQuestion() {
                let data = await getProgress()
                setProgress(data)
            }
            fetchDataQuestion()
        }, [])
    );

    const progressWidth = (type) => {
        return progress[type] / Number(type.slice(1))
    }
    const navigateTo = (type, title) => {
        navigation.navigate(RouterName.AllQuestion, { type: type, title: title })
    }
    const renderItem = ({item}) => {
        let title = ''
        let des = ''
        if(item === Constants.STORAGE.Q600) {
            title ="Toàn bộ câu hỏi trong bộ đề thi"
            des = "Toàn bộ 600 câu hỏi gồm 60 câu điểm liệt."
        } else if (item === 'Q166'){
            title = 'Khái niệm và quy tắc giao thông đường bộ'
            des = "166 câu, từ câu 1 đến câu 166, gồm 45 câu điểm liệt."
         
        } else if (item === Constants.STORAGE.Q26){
            title = 'Nghiệp vụ vận tải'
            des = "26 câu, từ câu 167 đến câu 192."
         
        } else if (item === Constants.STORAGE.Q21){
            title = 'Văn hoá, đạo đức nghề nghiệp người lái xe'
            des = "21 câu, từ câu 193 đến câu 213, gồm 4 câu điểm liệt."
         
        } else if (item === Constants.STORAGE.Q56){
            title = 'Kỹ thuật lái xe ô tô'
            des = "56 câu, từ câu 214 đến câu 269, gồm 11 câu điểm liệt."
         
        } else if (item === Constants.STORAGE.Q35){
            title = 'Cấu tạo và sữa chữa xe ô tô'
            des = "35 câu, từ câu 270 đến câu 304."
         
        } else if (item === Constants.STORAGE.Q182){
            title = 'Hệ thống biển báo hiệu đường bộ'
            des = "182 câu, từ câu 305 đến câu 486."
         
        } else if (item === Constants.STORAGE.Q114){
            title = 'Giải các thể sa hình'
            des = "114 câu, từ câu 487 đến câu 600."
         
        } else if (item === Constants.STORAGE.Q60){
            title = 'Câu hỏi về tình huống mất an toàn giao thông nghiêm trọng'
            des = "60 câu hỏi điểm liệt bắt buộc phải trả lời đúng."
        }
        return <TouchableNativeFeedback onPress={() => navigateTo(item, title)}>
        <View style={styles.item}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.desText}>{des}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ ...styles.progress, width: `${progressWidth(item) * 100}%` }} />
                    <View style={{ ...styles.totalProgress, width: `${100 - progressWidth(item) * 100}%` }} />
                </View>
                <Text style={styles.progressText}>{progress[item] + " / " + item.slice(1)}</Text>
            </View>
        </View>
    </TouchableNativeFeedback>
    }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={Object.keys(Constants.PROGRESS)}
                renderItem={renderItem}
             />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderColor,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleText: {
        fontSize: 18,
        color: Colors.slateGrey,
        fontWeight: 'bold'
    },
    desText: {
        fontSize: 14,
        color: Colors.darkGrey,
        // marginBottom: 10
    },
    progress: {
        height: 5,
        backgroundColor: Colors.green
    },
    totalProgress: {
        height: 5,
        backgroundColor: Colors.coolGrey
    },
    progressText: {
        color: Colors.green,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 10
    }
});

export default ListQuestion;
