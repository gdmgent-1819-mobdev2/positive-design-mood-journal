// journal entry first screen
//  mood slider for selecting your current mood

import React, { Component } from 'react';

import MoodSlider from '../components/MoodSlider';

export class JournalMoodEntry extends Component {
	render() {
		return (
			<MoodSlider />
		);
	}
}

export default JournalMoodEntry;
