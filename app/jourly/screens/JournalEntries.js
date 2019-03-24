// view your journal entries
//  searchbar
//  latest entries
import { View, StyleSheet, ScrollView } from 'react-native';

import React, { Component } from 'react';

import SearchInput from '../components/SearchInput';
import Text from '../components/FiraText';
import MoodCard from '../components/MoodCard';
import Colors from '../modules/Colors';

import firebase from 'firebase';

export class JournalEntries extends Component {
	state = {
		searchValue: '',
		isLoading: true,
		uid: null,
		notes: [],
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ 
					uid: user.uid 
				})

				this.getUserNotes();
			}
		})
	}

	updateSearch(val) {
		this.setState({ searchValue: val })
	}

	async getUserNotes() {
		try {
			const ref = firebase.database().ref('notes/' + this.state.uid);
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
	
	/* Scuffed */
	renderNotes() {
		const { notes } = this.state;
		const keys = [];
		const fields = [];

		Object.keys(notes).map(key => keys.push(key));

		Object.values(notes).map((note, index) => {
			fields.push(
				<MoodCard key={keys[index]}title={note.title} body={note.text} mood={note.mood}/>
			);
		})

		return fields;
	}

	render() {		
		if(this.state.isLoading) return null;

		else {
			return (
				<View style={styles.container}>
					<SearchInput 
						onChangeText={val => this.updateSearch(val)}qsd
						value={this.state.searchValue}
					/>
					<ScrollView>
						<View>
							<Text weight='bold' style={styles.title}>Today</Text>
							{this.renderNotes()}
						</View>					
					</ScrollView>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
		marginBottom: 16,
	}
})

export default JournalEntries;
