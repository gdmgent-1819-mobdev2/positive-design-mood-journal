import React, { Component } from 'react';
import firebase from 'firebase';
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	StyleSheet,
	View
} from 'react-native';
import Text from '../components/FiraText';

export class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
		if (this.checkUserAuthentication()) {
			this.props.navigation.navigate('App');
		}
	}
	checkUserAuthentication = async () => {
		//TODO: check for user authentication here
	};
	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

export default AuthLoadingScreen;
