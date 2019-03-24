import React, { Component } from 'react';
import { View, Picker, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import firebase from 'firebase';

import Text from '../components/FiraText';
import Colors from '../modules/Colors';

class Settings extends Component {
	state = {
		locationEnabled: false,
		user: null,
	};

	componentDidMount() {
		this.getCurrentUser();
	}

	getCurrentUser() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) { 
				this.setState({ user: user }) 
			}
		})
	}

	async signOut() {
		try {
			await firebase.auth().signOut();
			this.props.navigation.navigate('SignIn');
		} catch (err) {
			console.log(err);
		}	
	}

	render() {
		const { user } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text weight={'bold'} style={styles.title}>{ user ? user.email : 'Settings' }</Text>
				</View>
					<View style={styles.settingContainer}>
					<TouchableWithoutFeedback>
						<View style={styles.setting}>
							<Text weight={'bold'} style={styles.settingTitle}>Edit Account</Text>
							<Text weight={'bold'}>Change your display name</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={this.signOut.bind(this)}>
						<View style={styles.setting}>
							<Text weight={'bold'} style={styles.settingTitle}>Log Out</Text>
							<Text weight={'bold'}>Log out of your current account</Text>
						</View>
					</TouchableWithoutFeedback>
					<Picker
						selectedValue={this.state.locationEnabled}
						style={{ height: 50, width: 100 }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ language: itemValue })
						}
					>
						<Picker.Item label="locationEnabled" value="Use my location" />
						<Picker.Item label="locationDisabled" value="Disable location" />
					</Picker>
				</View>
			</View>
		);
	}
}

export default Settings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 32,
		paddingTop: 32,
		flexDirection: 'column',
	},
	title: {
		fontSize: 32,
	},
	header: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	settingContainer: {
		flex: 1,
	},
	setting: {
		paddingVertical: 24,
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 2,
	},
	settingTitle: {
		fontSize: 20,
	}
});
