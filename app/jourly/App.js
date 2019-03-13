import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
// import this as component Text instead of Text component from 'react-native'
import Text from './components/FiraText';
import Login from './views/Login';

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
			return (
				<View style={styles.container}>
					<Login />
					{this.state.fontLoaded ? (
						// weight attribute: bold, light empty defaults to regular weight
						<Text weight="light">Hello, I'm fira</Text>
					) : null}
				</View>
			);
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
