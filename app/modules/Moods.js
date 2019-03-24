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
        name: 'Angry',
        image: require('../assets/moods/Angry.png'),
        color: Colors.gradientRed
    },
    {
        name: 'Crying',
        image: require('../assets/moods/Crying.png'),
        color: Colors.gradientDarkBlue
    },
    {
        name: 'Sad',
        image: require('../assets/moods/Sad.png'),
        color: Colors.gradientBlue
    },
    {
        name: 'Nervous',
        image: require('../assets/moods/Nervous.png'),
        color: Colors.gradientPurple
    },
    {
        name: 'Surprised',
        image: require('../assets/moods/Surprised.png'),
        color: Colors.gradientLightGreen
    },
    {
        name: 'Confused',
        image: require('../assets/moods/Confused.png'),
        color: Colors.gradientLightBlue
    },
    {
        name: 'Calm',
        image: require('../assets/moods/Calm.png'),
        color: Colors.gradientPink
    },
    {
        name: 'Cool',
        image: require('../assets/moods/Cool.png'),
        color: Colors.gradientGreen
    },
    {
        name: 'Happy',
        image: require('../assets/moods/Happy.png'),
        color: Colors.gradientOrange
    },
    {
        name: 'Love',
        image: require('../assets/moods/Love.png'),
        color: Colors.gradientYellow
    },    
];

export default Moods;