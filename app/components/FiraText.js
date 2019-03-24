import React, { Component } from 'react';
import { Text } from 'react-native';

class FiraText extends Component {
	setFontWeight = weight => {
		switch (weight) {
			case 'bold':
				return 'fira-sans-bold';
			case 'light':
				return 'fira-sans-light';
			default:
				return 'fira-sans';
		}
	};
	render() {
		const font = this.setFontWeight(this.props.weight);
		return <Text style={[{ fontFamily: font }, this.props.style]}>{this.props.children}</Text>;
	}
}

export default FiraText;