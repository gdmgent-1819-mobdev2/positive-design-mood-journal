// export default [
//     0 = 'Really bad',
//     1 = 'Quite bad',
//     2 = 'Bad',
//     3 = 'Meh',
//     4 = 'Not sure',
//     5 = 'Okay',
//     6 = 'Fine',
//     7 = 'Allright',
//     8 = 'Good',
//     9 = 'Great',
//     10 = 'Really great'
// ];

import Colors from './Colors';

const Moods = [
    {
        name: 'Happy',
        image: require('../assets/moods/Happy.png'),
        color: Colors.gradientOrange
    },
    {
        name: 'Sad',
        image: require('../assets/moods/Sad.png'),
        color: Colors.gradientBlue
    },
];

export default Moods;