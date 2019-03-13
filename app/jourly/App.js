import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import Text from './components/FiraText';
import Login from './views/Login';

export default class App extends React.Component {
	state = {
		fontLoaded: false
	};
	async componentDidMount() {
		await Font.loadAsync({
			'fira-sans': require('./assets/fonts/FiraSans-Medium.ttf'),
			'fira-sans-light': require('./assets/fonts/FiraSans-Light.ttf'),
			'fira-sans-bold': require('./assets/fonts/FiraSans-ExtraBold.ttf')
		});
		this.setState({ fontLoaded: true });
	}
	render() {
		return (
			<View style={styles.container}>
				<Login />
				{this.state.fontLoaded ? (
					<Text type="light">Hello, I'm fira</Text>
				) : null}
			</View>
		);
	}
}

styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
