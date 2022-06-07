import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Containers/Home';
import QuestionsContent from '../Containers/QuestionsContent';
import TipsTheory from '../Containers/TipsTheory';
import TipsPractice from '../Containers/TipsPractice';
import ListQuestion from '../Containers/ListQuestion';
import { RouterName } from './RouterName';
import ContestList from '../Containers/ContestList';
import Contest from '../Containers/Contest';
import ContestResult from '../Containers/ConstestResult';
import { navigator } from './NavigationService';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer ref={navigator}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen
                    name={RouterName.Home}
                    component={Home}
                    options={{
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={RouterName.AllQuestion}
                    component={QuestionsContent}
                    options={{
                        title: '600 câu GPLX',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={RouterName.TipsTheory}
                    component={TipsTheory}
                    options={{
                        title: 'Các mẹo ghi nhớ',
                        
                    }}
                />
                <Stack.Screen
                    name={RouterName.TipsPractice}
                    component={TipsPractice}
                    options={{
                        title: 'Mẹo làm bài thi',
                    }}
                />
                <Stack.Screen
                    name={RouterName.ListQuestion}
                    component={ListQuestion}
                    options={{
                        title: 'Ôn tập câu hỏi',
                    }}
                />
                <Stack.Screen
                    name={RouterName.ContestList}
                    component={ContestList}
                    options={{
                        title: 'On tap de thi',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={RouterName.Contest}
                    component={Contest}
                    options={{
                        title: 'Man hinh de thi',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={RouterName.ContestResult}
                    component={ContestResult}
                    options={{
                        title: 'Ket qua de thi',
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;