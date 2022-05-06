import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash'
import Constants from '../Constants';

export const areEqualShallow = (a, b) => {
    for (var key in a) {
        if (!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for (var key in b) {
        if (!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
export const isArrayEqual = (x, y) => {
    return _(x).xorWith(y, _.isEqual).isEmpty();
};