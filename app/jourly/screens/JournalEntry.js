import React, { Component } from 'react';
import { Text } from 'react-native';
import JournalMoodEntry from './JournalMoodEntry';
import JournalNoteEntry from './JournalNoteEntry';

export default class JournalEntry extends Component {
	render() {
		// TODO: router flow for adding note:
		// 1. mood
		// 2. note (plus optional location)
		// 3. redirect to home
		return <JournalNoteEntry />;
	}
}
