import _ from 'lodash'
import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigator = createNavigationContainerRef()

// function setTopLevelNavigator(navigatorRef) {
//     navigator = navigatorRef
// }

function navigate(routeName, params) {
    navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params,
        })
    )
}

function pushToNewScreen(routeName, params) {
    if (getTopCurrentRoute() !== routeName) {
        navigator.dispatch(
            StackActions.push(
                routeName,
                params
            )
        )
    }
}

function replaceToNewScreen(routeName, params) {
    navigator.dispatch(
        StackActions.replace(
            routeName,
            params,
        )
    );
}

function pushToNewScreenWithoutCheckDuplicate(routeName, params) {
    navigator.dispatch(
        StackActions.push(
            routeName,
            params,
        )
    )
}

function getTopCurrentRoute() {
    const nav = _.get(navigator, ['state', 'nav'])
    return getCurrentRoute(nav)
}

function getCurrentRoute(nav) {
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
        return getCurrentRoute(nav.routes[nav.index])
    } else {
        return nav.routeName
    }
}

function hasRouter(routerName) {
    const nav = _.get(navigator, ['state', 'nav'])
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
        return nav.routes.some(item => routerName === item.routeName)
    } else {
        return false
    }
}

function navigateAndReset(routeName, params) {
    navigator.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [
                { name: routeName },
            ]
        })
    )
}

export default {
    navigate,
    pushToNewScreen,
    // setTopLevelNavigator,
    getTopCurrentRoute,
    pushToNewScreenWithoutCheckDuplicate,
    replaceToNewScreen,
    navigateAndReset,
    hasRouter
}