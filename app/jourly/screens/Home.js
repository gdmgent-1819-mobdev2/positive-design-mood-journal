import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Colors from '../modules/Colors';

import CurrentMood from '../components/CurrentMood';

// TODO: add bottom tab navigator
import CurrentMood from '../components/CurrentMood';

export default class Home extends Component {
	state = {};
	render() {
		return (
			<CurrentMood />
			// TODO: add bottom nav bar here
		);
	}
}
