import React from 'react';
import { Font } from 'expo';

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

const AppStack = createBottomTabNavigator({
	Home: {
		screen: Home
	},
	JournalEntries: {
		screen: JournalEntries
	},
	Settings: {
		screen: Settings
	}
});

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
