import React from 'react';


// routing
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Settings from './screens/Settings';
import Home from './screens/Home';
import JournalEntries from './screens/JournalEntries';
import { initFirebase } from './utils/firebase';

const AppNavigator = createSwitchNavigator(
	{
		SignIn: {
			screen: SignIn
		},
		SignUp: {
			screen: SignUp
		},
		Settings: {
			screen: Settings
		},
		Home: {
			screen: Home
		},
		Entries: {
			screen: JournalEntries
		},
	},
	{
		initialRouteName: 'SignUp'
	}
);
const AppContainer = createAppContainer(AppNavigator);

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
