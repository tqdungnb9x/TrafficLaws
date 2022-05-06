import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'
import Constants from '../Constants';

export const storeData = async (type, value) => {
    const jsonValue = JSON.stringify(value)
    try {
        console.log('save: ok');
        await AsyncStorage.setItem(Constants.STORAGE['Q' + type], jsonValue, (e) => console.log('[saveItem]', e == null ? 'success' : 'fail'))
    } catch (e) {
        console.log('[saveItem] error', e)
    }
};

export const removeItem = async (type) => {
    try {
        await AsyncStorage.removeItem(Constants.STORAGE['Q' + type], (e) => console.log('[removeItem]', e == null ? 'success' : 'fail'))
    } catch (e) {
        console.log('[removeItem] error', e)
    }
};

export const getData = async (type) => {
    try {
        const jsonValue = await AsyncStorage.getItem(Constants.STORAGE['Q' + type])
        return !!jsonValue || jsonValue.length === 0 ? Constants['DUMMY_ARRAY_' + type] : JSON.parse(jsonValue) ;
    } catch (e) {
        console.log('[saveItem] error', e)
        return Constants['DUMMY_ARRAY_' + type]
    }
}
