import React, { Component } from 'react';
import { StyleSheet, Image, View, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Text from './FiraText';

import Colors from '../modules/Colors';
import Moods from '../modules/Moods';

export default class CurrentMood extends Component {
	state = {
		rating: 0,
		isLoading: true,
	};

	componentDidMount() {
		this.retrieveMoodRating();
	}

	componentDidUpdate() {
		this.retrieveMoodRating();
	}

	async retrieveMoodRating() {
		try {
			const rating = await AsyncStorage.getItem('mood');
			if (rating !== null) {
				this.setState({ 
					rating,
					isLoading: false,
				 })
			} else {
				this.setState({ rating: 8 })
			}
		} catch (err) {
			console.log(err);
		}
	};

	setNativeProps = props => {
		this._component && this._component.setNativeProps(props);
	};

	render() {
		const { rating } = this.state;

		return (
			<LinearGradient
				colors={Moods[rating].color}
				style={styles.currentMoodContainer}
				start={[0, 0]}
				end={[1, 1]}
			>
				<Text weight="bold" style={styles.subTitle}>
					Current Mood
				</Text>
				<Image style={styles.currentMoodImage} source={Moods[rating].image} />
				<View style={styles.moodTitle}>
					<Text weight="bold" style={styles.title}>
						{Moods[rating].name}
					</Text>
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
		height: 130
	},
	subTitle: {
		color: Colors.white,
		fontSize: 18,
		marginBottom: 8
	},
	moodTitle: {
		position: 'absolute',
		bottom: 10
	},
	title: {
		color: Colors.white,
		fontSize: 50,
		marginBottom: 18,
		letterSpacing: 1
	}
});
