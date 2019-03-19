import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';
import Colors from '../modules/Colors';
import Text from '../components/FiraText';

export class GradientButton extends Component {
	render() {
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.navigation.navigate('Home')}
			>
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
			</TouchableWithoutFeedback>
		);
	}
}

export default GradientButton;

const styles = StyleSheet.create({
	btn: {
		padding: 20,
		flex: 1 / 9,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 75,
		justifyContent: 'center'
	},
	btnText: {
		color: Colors.white
	}
});
