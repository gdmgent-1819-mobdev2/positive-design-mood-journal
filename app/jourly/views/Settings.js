import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../modules/Colors';
import Text from '../components/FiraText';

class Settings extends Component {
	state = { settings };
	render() {
		return (
			<View>
				<Text weight={'bold'}>Settings</Text>
			</View>
		);
	}
}

export default Settings;
