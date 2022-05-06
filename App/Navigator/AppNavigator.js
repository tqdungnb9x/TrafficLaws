import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Containers/Home';
import QuestionsContent from '../Containers/QuestionsContent';
import TipsTheory from '../Containers/TipsTheory';
import TipsPractice from '../Containers/TipsPractice';



const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="AllQuestion"
                    component={QuestionsContent}

                />
                <Stack.Screen
                    name="TipsTheory"
                    component={TipsTheory}

                />
                <Stack.Screen
                    name="TipsPractice"
                    component={TipsPractice}
                    options={{
                        title: 'Mẹo làm bài thi ',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;