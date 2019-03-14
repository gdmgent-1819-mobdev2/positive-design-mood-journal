import React from 'react';
import { StyleSheet, View } from 'react-native';

// routing
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';
import SignIn from './screens/SignIn';
import Settings from './screens/Settings';
import Home from './screens/Home';

const AppNavigator = createStackNavigator(
	{
		SignIn: {
			screen: SignIn
		},
		Settings: {
			screen: Settings
		},
		Home: {
			screen: Home
		}
	},
	{
		initialRouteName: 'Home'
	}
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
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

styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
