// timeline overview of journal entries
import React, { Component } from 'react';
import { View } from 'react-native';
import Text from '../components/FiraText';
import EntryList from '../components/EntryList';
import Entry from '../components/Entry';

export class JournalTimeline extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			// TODO: timeline
			// TODO: places (avg scores from mood rating)
			<EntryList />
		);
	}
}

export default JournalTimeline;
