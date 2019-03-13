import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Colors from '../modules/Colors';
import { LinearGradient } from 'expo';
import Text from '../components/FiraText';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* TODO: add image */}
				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={text => this.setState({ email })}
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					onChangeText={text => this.setState({ password })}
				/>
				<LinearGradient
					style={styles.btn}
					colors={[Colors.gradGreen1, Colors.gradGreen2]}
					start={[0, 1]}
					end={[1, 0]}
				>
					<Text style={styles.btnText} weight={'bold'}>
						Sign In
					</Text>
				</LinearGradient>
				{/* TODO: add Sign Up button */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		borderRadius: 75,
		justifyContent: 'center'
	},
	btnText: {
		color: Colors.white
	},
	input: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		flexDirection: 'row',
		borderRadius: 75,
		backgroundColor: Colors.lightGray,
		// FIXME: is it possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	},
	container: {
		flex: 1,
		margin: 10,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center'
	}
});
