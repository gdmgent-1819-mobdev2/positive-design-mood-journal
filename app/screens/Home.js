import React, { Component } from 'react';
import {
	ScrollView,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import firebase from 'firebase';

import Text from '../components/FiraText';
import CurrentMood from '../components/CurrentMood';
import MoodCard from '../components/MoodCard';


export default class Home extends Component {
	state = {
		isLoading: true,
		notes: [],
		uid: null
	};

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ 
					uid: user.uid 
				})

				this.getUserNotes();
			};
		});
	}

	componentDidUpdate() {
		this.getUserNotes();
	}

	async getUserNotes() {
		try {
			const ref = await firebase.database().ref('notes/' + this.state.uid);
			ref.once('value').then((snapshot) => {
				this.setState({ 
					isLoading: false,
					notes: snapshot.val()
				})
			});
		} catch (err) {
			console.log(err);
		}
	}
	
	renderNotes() {
		const { notes } = this.state;
		const keys = [];
		const cards = [];

		Object.keys(notes).map(key => keys.push(key));

		Object.values(notes).map((note, index) => {
			cards.push(
				<MoodCard key={keys[index]} title={note.title} body={note.text} mood={note.mood}/>
			);
		})

		return cards;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.moodContainer}>
					<CurrentMood />
				</View>
				<View style={styles.cardContainer}>
					<View style={styles.titleContainer}>
						<Text weight="bold" style={{ fontSize: 24 }}>
							Recent Notes
						</Text>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('JournalEntries')}
						>
							<Text style={{ fontSize: 18 }}>View All</Text>
						</TouchableOpacity>
					</View>
					<ScrollView>
							{this.state.notes !== null ? (
								this.renderNotes()
							) : (
								<Text>No notes found. Make some new notes first!</Text>
							)}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 16
	},
	moodContainer: {
		flex: 0.8
	},
	cardContainer: {
		flex: 1,
		marginTop: 32,
		marginLeft: 16,
		marginRight: 16
	}
});
