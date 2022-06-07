import { Colors, Fonts, Images, Strings } from '../Theme';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import React, { Component, PureComponent } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../Constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class HeaderContest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: Constants.CONTEST_TIMER,
            width: 1,
        }
    }

    componentDidMount() {
        this._isMounted = true;
        this.intervalID = setInterval(
            () => { if (this._isMounted) this.setState(state => ({ timer: state.timer - 1 })) },
            1000
        );
        setTimeout(() => {
            clearInterval(this.intervalID)
            this.props.endContest(this.state.timer)
            if (this._isMounted) this.setState({ timer: Constants.CONTEST_TIMER })
        }, Constants.CONTEST_TIMER * 1000);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.intervalID)
    }

    renderItem = ({ item, index }) => {
        let color = item.answer === -2 ? Colors.barGreen : item.answer !== 0 ? Colors.yellow : Colors.cloudyBlue
        return (
            <View style={{
                backgroundColor: color,
                width: this.state.width / 18,
                height: 11,
                flex: 1,
                margin: 2
            }}/>
        );
    }

    render() {
        const { title, indexQuestion, data } = this.props;
        let flatData = [...data]
        flatData.length % 2 === 0 ? flatData : flatData.push({answer: -2})
        const { timer } = this.state;
        let minutes = Math.floor(timer / 60)
        let seconds = timer % 60 < 10 ? '0' + (timer % 60).toString() : timer % 60
        return (
            <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', width: windowWidth, backgroundColor: Colors.barGreen, paddingHorizontal: 5 }}>
                <FlatList 
                    style={{ flex: 1, height: 30}}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={18}
                    data={flatData}
                    renderItem={this.renderItem}
                />
                <Text numberOfLines={1} style={{ fontSize: 18, color: 'white', paddingRight: 10, marginLeft: 10 }}>{minutes + ":" + seconds}</Text>
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

export default HeaderContest;
