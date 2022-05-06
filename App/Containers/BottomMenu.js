import React from 'react';
import { Animated, Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Platform, UIManager, LayoutAnimation, TouchableNativeFeedback, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../Constants';
import { Colors } from '../Theme';
import { areEqualShallow , isArrayEqual} from '../Utils/logic';
import IndexMenuItem from './IndexMenuItem';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class BottomMenu extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.indexQuestion !== this.props.indexQuestion || nextState.hidden !== this.state.hidden;
    }
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
    }

    _toggleSubview() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        this.setState(prevState => {
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        });

        // var toValue = windowHeight / 2;

        // if (isHidden) {
        //     toValue = 50;
        // }

        // //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        // //100 comes from the style below, which is the height of the subview.
        // Animated.spring(
        //     this.state.bounceValue,
        //     {
        //         toValue: toValue,
        //         velocity: 3,
        //         tension: 40,
        //         friction: 8,
        //         useNativeDriver: true
        //     }
        // ).start();

        // isHidden = !isHidden;
    }

    setIndex = (index) =>{
        if(index < 0) return
        this.props.setIndex(index)
    }
    keyExtractor = item => `${item.index}`

    renderItem = ({ item }) => {
        return (
            <IndexMenuItem
                selected={item.index == this.props.indexQuestion}
                setIndex={this.setIndex}
                index={item.index}
                item={item}
            />
        );
    }

    render() {
        const { hidden } = this.state
        const { data, indexQuestion } = this.props
        const itemWidth = windowWidth / 6 - 10
        console.log('render Bottom Menu', indexQuestion, data[0]);

        return (
            <View
                style={[styles.subView,
                { transform: [{ translateY: hidden ? windowHeight / 2 : 50 }] }]}
            >
                <View style={{ flexDirection: "row", height: 50, width: windowWidth, backgroundColor: Colors.barGreen, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.setIndex(indexQuestion-1)} style={{ width: 60, alignItems: 'center' }} >
                        <Icon name={"chevron-left"} size={30} color={'white'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', borderLeftWidth: 1, borderRightWidth: 1, borderColor: Colors.borderColorBox, justifyContent: 'center' }} onPress={() => { this._toggleSubview() }}>
                        <Icon name={hidden ? "chevron-up" : "chevron-down"} size={30} color={'white'} />
                        <Text style={styles.buttonText}>{"  Câu số "+ (indexQuestion + 1)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 60, alignItems: 'center' }} >
                        <Icon name={"chevron-right"} size={30} color={'white'} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    decelerationRate={0.8}
                    // removeClippedSubviews={true}
                    initialNumToRender={8}
                    windowSize={9}
                    maxToRenderPerBatch={100}
                    updateCellsBatchingPeriod={1}
                    data={data}
                    numColumns={6}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    extraData={indexQuestion}
                    // getItemLayout={(data, index) => (
                    //     { length: windowWidth / 6, offset: windowWidth / 6 * index, index }
                    // )}
                />
            </View>
        )
    }
}

export default BottomMenu;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 66
    },
    button: {
        padding: 8,
    },
    buttonText: {
        fontSize: 17,
        color: "white"
    },
    subView: {
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        backgroundColor: Colors.paper,
        height: windowHeight / 2,
    }
});