import React from 'react';
import Colors from './modules/Colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo';
import Login from './views/Login';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Login />
			</View>
		);
	}
}

styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
