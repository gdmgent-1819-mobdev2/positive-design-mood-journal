import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
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
					colors={[colors.gradGreen1, colors.gradGreen2]}
					start={[0, 1]}
					end={[1, 0]}
				>
					<Text style={styles.btnText}>Sign In</Text>
				</LinearGradient>
				{/* TODO: add Sign Up button */}
			</View>
		);
	}
}

const colors = {
	white: '#fff',
	black: '#000',
	green: '#23E3AC',
	blue: '#4DD4E9',
	lightBlue: '#D1FFF2',
	lightGray: '#EDF6F7',
	gradPurple1: '#7C62CC',
	gradPurple2: '#6171CC',
	gradBlue1: '#43D2E8',
	gradBlue2: '#0099BF',
	gradRed1: '#FA6D35',
	gradRed2: '#FAFA35',
	gradGreen1: '#23E3AD',
	gradGreen2: '#22E37F',
	gradOrange1: '#FFA21F',
	gradOrange2: '#FFCB1F',
	gradYellow1: '#FFC31F',
	gradYellow2: '#FFF31E'
};

const styles = StyleSheet.create({
	btn: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		borderRadius: 75,
		justifyContent: 'center'
	},
	btnText: {
		color: colors.white
	},
	input: {
		padding: 20,
		flex: 1 / 24,
		margin: 10,
		flexDirection: 'row',
		borderRadius: 75,
		backgroundColor: colors.lightGray
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
