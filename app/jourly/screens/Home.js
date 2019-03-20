import React, { Component } from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Colors from '../modules/Colors';

import CurrentMood from '../components/CurrentMood';

// TODO: add bottom tab navigator
export default class Home extends Component {
	state = {};
	render() {
<<<<<<< HEAD
		return <CurrentMood />;
=======
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
=======
>>>>>>> Stashed changes

import CurrentMood from '../components/CurrentMood';

export default class Home extends Component {
	state = {};
	render() {
		return (
			<CurrentMood />
			// TODO: add bottom nav bar here
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
		);
>>>>>>> 1dda839f9bc7a1fe597fd3e50e0a1c874b46a95b
	}
}
