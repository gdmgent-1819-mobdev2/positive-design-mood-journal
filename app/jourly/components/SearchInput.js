import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Colors from '../modules/Colors'

export default class SearchInput extends Component {
    render() {
        return (
            <TextInput
                style={styles.searchInput}
            />
        )
    }
}

const styles = StyleSheet.create({
    searchInput: {
        height: 45,
        marginVertical: 16,
        paddingLeft: 32,
		flexDirection: 'row',
		borderRadius: 50,
		backgroundColor: Colors.lightGray,
		// FIXME: check if possible to set default font family globally?
		fontFamily: 'fira-sans-light'
	}
})