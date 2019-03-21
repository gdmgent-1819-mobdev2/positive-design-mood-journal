import React from 'react';
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './modules/Colors';

// routing
import {
	createSwitchNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Settings from './screens/Settings';
import Home from './screens/Home';
import JournalEntries from './screens/JournalEntries';
import JournalTimeline from './screens/JournalTimeline';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import { initFirebase } from './utils/firebase';

const AuthStack = createStackNavigator(
	{
		SignIn: {
			screen: SignIn
		},
		SignUp: {
			screen: SignUp
		},
		Home: {
			screen: Home
		}
	},
	{
		initialRouteName: 'SignIn'
	}
);

const AppStack = createBottomTabNavigator(
	{
		Home: {
			screen: Home
			// navigationOptions: {
			// 	tabBarLabel: 'Home',
			// 	tabBarIcon: ({ tintColor }) => (
			// 		<Image
			// 			source={require('./assets/images/homeicon.png')}
			// 			style={[styles.icon, { tintColor: tintColor }]}
			// 		/>
			// 	)
			// }
		},
		JournalEntries: {
			screen: JournalEntries,
			navigationOptions: {
				tabBarLabel: 'Entries'
			}
		},
		JournalTimeline: {
			screen: JournalTimeline,
			navigationOptions: {
				tabBarLabel: 'Timeline'
			}
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				tabBarLabel: 'Options'
			}
		}
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				return <Icon type={routeName} focused={focused} />;
			}
		}),
		tabBarOptions: {
			activeTintColor: Colors.blue,
			inactiveTintColor: Colors.darkGray,
			style: {
				flex: 1 / 12,
				paddingVertical: 5,
				borderTopWidth: 0
			},
			labelStyle: {
				fontSize: 12,
				lineHeight: 20
			}
		},
		animationEnabled: true,
		swipeEnabled: true
	}
);

const AppContainer = createAppContainer(
	createSwitchNavigator({
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack
	}),
	{
		initialRouteName: 'AuthLoadingScreen'
	}
);

export default class App extends React.Component {
	constructor() {
		super();
		initFirebase();
	}
	state = {
		appLoaded: false
	};
	async componentDidMount() {
		try {
			await Font.loadAsync({
				'fira-sans': require('./assets/fonts/FiraSans-Medium.ttf'),
				'fira-sans-light': require('./assets/fonts/FiraSans-Light.ttf'),
				'fira-sans-bold': require('./assets/fonts/FiraSans-ExtraBold.ttf')
			});
		} catch (e) {
			console.warn('Could not load fonts');
			console.log(e.message);
		} finally {
			this.setState({ appLoaded: true });
		}
	}
	render() {
		if (this.state.appLoaded) {
			return <AppContainer />;
		} else {
			// TODO: loader component
			return null;
		}
	}
}
