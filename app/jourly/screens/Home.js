import React, { Component } from 'react';
import { ScrollView, View, Button, Image, StyleSheet } from 'react-native';
import Text from '../components/FiraText';
import Colors from '../modules/Colors';

import CurrentMood from '../components/CurrentMood';
import MoodCard from '../components/MoodCard';

import firebase from 'firebase';

export default class Home extends Component {
	state = {
		posts: [],
		uid: null,
	};

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) this.setState({ uid: user.uid });
		});
	}

	getUserNotes() {
		firebase.database().ref('notes').on('value', snapshot => {
			console.log(snapshot);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.moodContainer}>
					<CurrentMood />
				</View>
				<View style={styles.cardContainer}>
					<View style={styles.titleContainer}>
						<Text weight='bold' style={{fontSize: 24}}>Recent Notes</Text>
						<Text style={{fontSize: 18}}>View All</Text>
					</View>
					<ScrollView>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={[Colors.gradOrange1, Colors.gradOrange2]}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={[Colors.gradBlue1, Colors.gradBlue2]}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={[Colors.gradRed1, Colors.gradRed2]}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={[Colors.gradOrange1, Colors.gradOrange2]}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={[Colors.gradOrange1, Colors.gradOrange2]}/>
					</ScrollView>
				</View>
			</View>
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