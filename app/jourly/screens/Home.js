import React, { Component } from 'react';
<<<<<<< Updated upstream
import { View, Text, Button, Image, StyleSheet } from 'react-native';

// TODO: add bottom tab navigator
class Home extends Component {
	state = {};
	render() {
		return (
			// TODO: display latest entry using component
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Image
					style={{ width: 50, height: 50 }}
					source={{
						uri:
							'https://facebook.github.io/react-native/docs/assets/favicon.png'
					}}
				/>
				<Button
					title="Go back"
					onPress={() => this.props.navigation.navigate('SignIn')}
				/>
				<Button
					title="Settings"
					onPress={() => this.props.navigation.navigate('Settings')}
				/>
			</View>
=======

import CurrentMood from '../components/CurrentMood';

export default class Home extends Component {
	state = {};
	render() {
		return (
			<CurrentMood />
			// TODO: add bottom nav bar here
>>>>>>> Stashed changes
		);
	}
}

export default Home;
