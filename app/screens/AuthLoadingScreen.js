import React, { Component } from 'react';
import {
	ActivityIndicator,
	StatusBar,
	View
} from 'react-native';
import firebase from 'firebase';

export class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		}
		if (this.checkUserAuthentication()) {
			this.props.navigation.navigate('App');
		}
	}
	checkUserAuthentication = async () => {
		firebase.auth().onAuthStateChanged(user => {
			if (user) this.setState({ isLoggedIn: true, })
		})
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
