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
				colors={Colors.gradientPurple}
				style={styles.sliderContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<VerticalSlider
					value={5} // current mood value here
					min={0}
					max={10}
					onChange={value => {
						console.log('CHANGE', value);
					}}
					onComplete={value => {
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
				{/* TODO: make this a tooltip displaying after 3 seconds or on button focused */}
				<Text style={{ color: Colors.white }}>Press & Hold to continue</Text>
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
