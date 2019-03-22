import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import JournalMoodEntry from './JournalMoodEntry';
import JournalNoteEntry from './JournalNoteEntry';

export default class NewJournalEntry extends Component {
	render() {
		// TODO: router flow for adding note:
		// 1. mood
		// 2. note (plus optional location)
		// 3. redirect to home
		return (
			<View style={styles.container}>
				<JournalMoodEntry />
				<TouchableHighlight onPress={() => this.props.navigation.navigate('AddEntry')}>
					<Text weight='bold'>Next</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})