// view your journal entries
//  searchbar
//  latest entries
import { View, StyleSheet, ScrollView } from 'react-native';

import React, { Component } from 'react';

import SearchInput from '../components/SearchInput';
import Text from '../components/FiraText';
import MoodCard from '../components/MoodCard';
import Colors from '../modules/Colors';

export class JournalEntries extends Component {
	render() {
		return (
			<View style={styles.container}>
				<SearchInput />
				<ScrollView>
					<View>
						<Text weight='bold' style={styles.title}>Today</Text>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientOrange}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientOrange}/>
					</View>
					<View>
						<Text weight='bold' style={styles.title}>Yesterday</Text>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientRed}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientRed}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientRed}/>
						<MoodCard title={'Op Reis'} body={'Leuke dingen gedaan vandaag'} mood={Colors.gradientRed}/>
					</View>
				</ScrollView>
			</View>
		);
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
