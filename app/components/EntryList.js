import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entry from './Entry';
import firebase from 'firebase';

export default class EntryList extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		let itemsRef = firebase.database().ref('/notes');
		itemsRef.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items });
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.items.length > 0 ? (
					<Entry items={this.state.items} />
				) : (
					<Text>No items</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	}
});
