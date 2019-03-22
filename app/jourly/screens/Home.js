import React, { Component } from 'react';
import { ScrollView, View, Button, Image, StyleSheet } from 'react-native';
import Text from '../components/FiraText';
import Colors from '../modules/Colors';

import CurrentMood from '../components/CurrentMood';
import MoodCard from '../components/MoodCard';

export default class Home extends Component {
	state = {};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.moodContainer}>
					<CurrentMood />
				</View>
				<View style={styles.cardContainer}>
					<View style={styles.titleContainer}>
						<Text weight='bold' style={{fontSize: 24,}}>Recent Notes</Text>
						<Text style={{fontSize: 18}}>View All</Text>
					</View>
					<ScrollView>
						<MoodCard />
						<MoodCard />
						<MoodCard />
						<MoodCard />
						<MoodCard />
					</ScrollView>
				</View>
			</View>
			// TODO: add bottom nav bar here
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 16,
	},
	moodContainer: {
		flex: 0.8,
	},
	cardContainer: {
		flex: 1,
		marginTop: 32,
		marginLeft: 16,
		marginRight: 16
	}
});