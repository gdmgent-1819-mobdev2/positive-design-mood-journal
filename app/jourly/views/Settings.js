import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../modules/Colors';

// import this as component Text instead of Text component from 'react-native'
import Text from '../components/FiraText';

class Settings extends Component {
	state = { settings: {} };
	render() {
		return (
			<View style={styles.container}>
				{/* // weight attribute: bold, light empty defaults to regular weight */}
				<Text weight={'bold'}>Settings</Text>
			</View>
		);
	}
}

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});
