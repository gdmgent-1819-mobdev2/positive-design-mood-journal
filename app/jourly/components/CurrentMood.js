import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo';
import Text from './FiraText';

import Colors from '../modules/Colors';

export default class CurrentMood extends Component {
	state = {
		moodRating: 0
	};
	getMood(rating) {
		return moods[rating];
	}
	setNativeProps = props => {
		this._component && this._component.setNativeProps(props);
	};
	render() {
		return (
			<LinearGradient
				colors={[Colors.gradOrange1, Colors.gradOrange2]}
				style={styles.currentMoodContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<Text weight='bold' style={styles.subTitle}>Current Mood {this.state.moodRating}</Text>
				{/* TODO: add animated svg */}
				<Image 
					style={styles.currentMoodImage}
					source={require('../assets/moods/Happy.png')}
				/>
				<View style={styles.moodTitle}>
					<Text weight='bold' style={styles.title}>Happy</Text>
				</View>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	currentMoodContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	currentMoodImage: {
		width: 130,
		height: 130,
	},
	subTitle: {
		color: Colors.white,
		fontSize: 18,
		marginBottom: 8,
	},	
	moodTitle: {
		position: 'absolute',
		bottom: 10,
	},	
	title: {
		color: Colors.white,
		fontSize: 50,
		marginBottom: 18,
		letterSpacing: 1,
	}
});
