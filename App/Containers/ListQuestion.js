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
            title ="To??n b??? c??u h???i trong b??? ????? thi"
            des = "To??n b??? 600 c??u h???i g???m 60 c??u ??i???m li???t."
        } else if (item === 'Q166'){
            title = 'Kh??i ni???m v?? quy t???c giao th??ng ???????ng b???'
            des = "166 c??u, t??? c??u 1 ?????n c??u 166, g???m 45 c??u ??i???m li???t."
         
        } else if (item === Constants.STORAGE.Q26){
            title = 'Nghi???p v??? v???n t???i'
            des = "26 c??u, t??? c??u 167 ?????n c??u 192."
         
        } else if (item === Constants.STORAGE.Q21){
            title = 'V??n ho??, ?????o ?????c ngh??? nghi???p ng?????i l??i xe'
            des = "21 c??u, t??? c??u 193 ?????n c??u 213, g???m 4 c??u ??i???m li???t."
         
        } else if (item === Constants.STORAGE.Q56){
            title = 'K??? thu???t l??i xe ?? t??'
            des = "56 c??u, t??? c??u 214 ?????n c??u 269, g???m 11 c??u ??i???m li???t."
         
        } else if (item === Constants.STORAGE.Q35){
            title = 'C???u t???o v?? s???a ch???a xe ?? t??'
            des = "35 c??u, t??? c??u 270 ?????n c??u 304."
         
        } else if (item === Constants.STORAGE.Q182){
            title = 'H??? th???ng bi???n b??o hi???u ???????ng b???'
            des = "182 c??u, t??? c??u 305 ?????n c??u 486."
         
        } else if (item === Constants.STORAGE.Q114){
            title = 'Gi???i c??c th??? sa h??nh'
            des = "114 c??u, t??? c??u 487 ?????n c??u 600."
         
        } else if (item === Constants.STORAGE.Q60){
            title = 'C??u h???i v??? t??nh hu???ng m???t an to??n giao th??ng nghi??m tr???ng'
            des = "60 c??u h???i ??i???m li???t b???t bu???c ph???i tr??? l???i ????ng."
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
