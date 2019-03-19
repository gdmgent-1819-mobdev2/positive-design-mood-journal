import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../modules/Colors';

class FormInput extends Component {
	props = {
		placeholder: ''
	};
	state = {
		isFocused: false
	};
	handleFocus = e => {
		this.setState({ isFocused: true });
		if (this.props.onFocus) {
			this.props.onFocus(e);
		}
	};

	handleBlur = e => {
		this.setState({ isFocused: false });
		if (this.props.onBlur) {
			this.props.onBlur(e);
		}
	};
	render() {
		const { isFocused } = this.state;
		const { onFocus, onBlur, ...otherProps } = this.props;
		return (
			<TextInput
				style={styles.textInput}
				selectionColor={Colors.gradGreen1}
				underlineColorAndroid={isFocused ? Colors.gradGreen2 : Colors.white}
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
				{...otherProps}
			/>
		);
	}
}

export default FormInput;

const styles = StyleSheet.create({
	textInput: {
		padding: 20,
		flex: 1 / 9,
		marginTop: 10,
		marginBottom: 10,
		flexDirection: 'row',
		borderRadius: 75,
		backgroundColor: Colors.lightGray,
		fontFamily: 'fira-sans-light'
	}
});
