import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import Colors from '../modules/Colors';

export default class SearchInput extends Component {
	render() {
		const { onChangeText, value } = this.props;

		return (
			<TextInput
				style={styles.searchInput}
				onChangeText={onChangeText}
				value={value}
			/>
		);
	}
}

const styles = StyleSheet.create({
	searchInput: {
		height: 45,
		marginVertical: 16,
		paddingLeft: 32,
		flexDirection: 'row',
		borderRadius: 50,
		backgroundColor: Colors.lightGray,
		fontFamily: 'fira-sans-light'
	}
});
