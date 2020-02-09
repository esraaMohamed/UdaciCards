import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import Constants from "expo-constants";
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack";
import ViewDecks from "./components/ViewDecks";
import AddDeck from "./components/AddDeck";
import ViewDeck from "./components/ViewDeck";
import AddCard from "./components/AddCard";
import {purple, white, lightPurp} from "./utils/colors";
import Quiz from "./components/Quiz";
import Card from "./components/Card";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './reducers'
import middleware from './middleware'


export const UdaciStatusBar = ({backgroundColor, ...props}) => {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const RouteConfigs = {
    ViewDecks: {
        screen: ViewDecks,
        navigationOptions: {
            tabBarLabel: "View Decks",
            tabBarIcon: ({tintColor}) => <Ionicons
                name='ios-bookmarks' size={30} color={tintColor}/>
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: "Add Deck",
            tabBarIcon: ({tintColor}) => <FontAwesome
                name='plus-square' size={30} color={tintColor}/>
        }
    }
}

const TabNavigatorConfig = {
    navigationOptions: {
        header: null,
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? white : lightPurp,
        inactiveTintColor: Platform.OS === 'ios' ? lightPurp : white,
        style: {
            height: 56,
            backgroundColor: purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
};

const Tabs =
    Platform.OS === "ios"
        ? createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)
        : createMaterialBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
        Home: {
            screen: Tabs
        },
        ViewDeck: {
            screen: ViewDeck,
            navigationOptions: {
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: purple
                }
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: purple
                }
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: purple
                }
            }
        },
        Card: {
            screen: Card,
            navigationOptions: {
                headerTintColor: white,
                headerStyle: {
                    backgroundColor: purple
                }
            }
        }
    }
)

const TabNav = createAppContainer(MainNavigator)

class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer, middleware)}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={purple} barStyle='light-content'/>
                    <TabNav/>
                </View>
            </Provider>
        )
    }
}

export default App;
