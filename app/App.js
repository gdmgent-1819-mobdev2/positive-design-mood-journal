import React from 'react';
import { Font } from 'expo';

import { initFirebase } from './utils/firebase';
import firebase from 'firebase';
import AppContainer from './utils/router';

export default class App extends React.Component {
	state = {
		appLoaded: false,
		isLoggedIn: false
	};

	constructor() {
		super();
		initFirebase();
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ isLoggedIn: true });
			}
		});
	}

	async componentDidMount() {
		try {
			await Font.loadAsync({
				'fira-sans': require('./assets/fonts/FiraSans-Medium.ttf'),
				'fira-sans-light': require('./assets/fonts/FiraSans-Light.ttf'),
				'fira-sans-bold': require('./assets/fonts/FiraSans-ExtraBold.ttf')
			});
		} catch (e) {
			console.warn('Could not load fonts');
			console.log(e.message);
		} finally {
			this.setState({ appLoaded: true });
		}
	}
	render() {
		if (this.state.appLoaded) {
			return <AppContainer />;
		} else {
			// TODO: loader component
			return null;
		}
	}
}
