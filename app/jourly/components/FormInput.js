import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../modules/Colors';

class FormInput extends Component {
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
				style={[styles.textInput, isFocused ? styles.textInputFocus : '']}
				selectionColor={Colors.gradGreen1}
				onFocus={this.handleFocus}
				onBlur={this.handleBlur}
				placeholder={this.props.placeholder}
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
		color: Colors.white,
		fontFamily: 'fira-sans-light'
	},
	textInputFocus: {
		backgroundColor: Colors.lightBlue
	}
});
