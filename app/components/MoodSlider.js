import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import VerticalSlider from './VerticalSlider';

import Colors from '../modules/Colors';

export class MoodSlider extends Component {
	render() {
		const { onChange, onComplete, currentMood } = this.props;

		return (
			<VerticalSlider
				style={styles.sliderContainer}
				value={currentMood} // current mood value here
				min={0}
				max={9}
				onComplete={onComplete}
				onChange={onChange}
				width={50}
				height={400}
				step={1}
				borderRadius={5}
				minimumTrackTintColor={Colors.lightGray}
				maximumTrackTintColor={Colors.white}
				showBallIndicator
				ballIndicatorColor={Colors.blue}
				ballIndicatorTextColor={Colors.white}
			/>
		);
	}
}

const styles = StyleSheet.create({
	sliderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MoodSlider;
