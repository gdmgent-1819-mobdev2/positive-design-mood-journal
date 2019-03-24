import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import React, { Component } from 'react';

export default class SplashLoader extends Component {
	render() {
		return (
			<View style={styles.loaderContainer}>
				<Text style={styles.loader}>Loading app</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: '#000'
	},
	loader: {}
});
