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
// stack
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
// tabs
import Home from './screens/Home';
import JournalEntries from './screens/JournalEntries';
import NewJournalEntry from './screens/NewJournalEntry';
import JounralImageEntry from './screens/JournalImageEntry';
import JournalNoteEntry from './screens/JournalNoteEntry';
import JournalTimeline from './screens/JournalTimeline';
import Settings from './screens/Settings';
import { initFirebase } from './utils/firebase';

const AuthStack = createStackNavigator(
	{
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				header: null,
			}
		},
		SignUp: {
			screen: SignUp
		},
		AddEntry: {
			screen: JournalNoteEntry,
			navigationOptions: {
				title: 'New Entry'
			}
		},
		CameraEntry: {
			screen: JounralImageEntry,
			navigationOptions: {
				header: null,
			}
		},
	},
	{
		initialRouteName: 'SignIn',
		headerLayoutPreset: 'center'
	},
	
);

const AppStack = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-home" size={32} />
			}
		},
		JournalEntries: {
			screen: JournalEntries,
			navigationOptions: {
				tabBarLabel: 'Entries',
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-albums" size={32} />
			}
		},
		NewJournalEntry: {
			screen: NewJournalEntry,
			navigationOptions: {
				tabBarLabel: 'Add entry',
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-add" size={32} />,
				tabBarVisible: false
			}
		},
		JournalTimeline: {
			screen: JournalTimeline,
			navigationOptions: {
				tabBarLabel: 'Timeline',
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="md-analytics" size={32} />
				)
			}
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				tabBarLabel: 'Options',
				tabBarIcon: ({ tintColor }) => <Ionicons name="md-options" size={32} />
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
				borderTopWidth: 0,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 5,
				},
				shadowOpacity: 0.34,
				shadowRadius: 6.27,

				elevation: 10,
			},
			labelStyle: {
				fontSize: 12,
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
