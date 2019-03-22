import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './FiraText';
import VerticalSlider from './VerticalSlider';

import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';

export class MoodSlider extends Component {
	render() {
		return (
			<LinearGradient
				colors={[Colors.gradPurple1, Colors.gradPurple2]}
				style={styles.sliderContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<VerticalSlider
					value={1}
					disabled={false}
					min={0}
					max={10}
					onChange={(value: number) => {
						console.log('CHANGE', value);
					}}
					onComplete={(value: number) => {
						console.log('COMPLETE', value);
					}}
					width={50}
					height={500}
					step={1}
					borderRadius={5}
					minimumTrackTintColor={Colors.lightGray}
					maximumTrackTintColor={Colors.white}
					showBallIndicator
					ballIndicatorColor={Colors.blue}
					ballIndicatorTextColor={Colors.white}
				/>
			</LinearGradient>
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
