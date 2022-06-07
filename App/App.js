/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Dimensions,
  Text
} from 'react-native';
import Constants from './Constants';
import AppNavigator from '../App/Navigator/AppNavigator';

import QuestionsContent from './Containers/QuestionsContent';
import { Colors } from './Theme';
import BottomMenu from './Containers/BottomMenu';
import TipsPractice from './Containers/TipsPractice';
import { removeItem } from './Utils/storage';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'default'} backgroundColor={Colors.barGreen} />
      <AppNavigator/>
    </SafeAreaView>
  );
};

export default App;