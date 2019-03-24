import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import Colors from '../modules/Colors';

import MoodSlider from '../components/MoodSlider';
import Text from '../components/FiraText';


export class JournalMoodEntry extends Component {
	render() {
		return (
			<LinearGradient
				colors={Colors.gradientPurple}
				style={styles.sliderContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<Text weight='bold' style={{ color: Colors.white }}>How are you feeling today?</Text>
				<MoodSlider />
				<Text weight='bold' style={{ color: Colors.white }}>Happy</Text>
			</LinearGradient>
						
		);
	}
}

const styles = StyleSheet.create({
	sliderContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	btnContainer: {
		backgroundColor: Colors.white,
        height: 50,
		marginHorizontal: 16,
		marginTop: 32,
		marginBottom: 16,
		borderRadius: 75,
		alignSelf: 'stretch',
        justifyContent: 'center',
		alignItems: 'center',
    },
});

export default JournalMoodEntry;
