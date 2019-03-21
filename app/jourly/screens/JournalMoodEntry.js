// journal entry first screen
//  mood slider for selecting your current mood

import React, { Component } from 'react';
import MoodSlider from '../components/MoodSlider';

export class JournalMoodEntry extends Component {
	render() {
		return (
			// TODO: moodslider (animated svg icon)
			<MoodSlider />
		);
	}
}

export default JournalMoodEntry;
