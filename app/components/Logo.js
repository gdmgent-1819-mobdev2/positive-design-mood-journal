import React from 'react';
import { Dimensions, Image } from 'react-native';

const Logo = ({resizeMode}) => {
    const dimensions = Dimensions.get('window');
    const imageHeight = 100;
    const imageWidth = dimensions.width / 1.5;
    
    return (
        <Image
            resizeMode={resizeMode ? resizeMode : 'contain'}
            style={{height: imageHeight, width: imageWidth}}
            source={require('../assets/logo.png')}
        />
    )
}

export default Logo;