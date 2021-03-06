import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import TextMono from '../components/TextMono';

const MESSAGES = [
    'Obtaining the grain...',
    'Buying Costco pizzas...',
    'Calling Chipotle in advance...',
    'Identifying hotdog...',
    'Identifying not hotdog...',
    'Not being paid overtime...',
    'Calling the [I]ntelligent [B]oardgame [M]asters...',
    'Walking the longest road...',
    'Amassing the largest army...',
    'Building roads...',
    'Building more pylons...',
    'Trading for brick...',
    'Rolling a 7...',
    'Hardcoding your result...',
    'Training the ML model...',
    'Building a settlement...',
    'Rolling the dice...',
    'Hanging with sloths...',
    'Stealing snacks from H105...',
    'Getting free food...',
    'Sitting on hold for a flight agent...',
    'Stealing Emma from the others...',
    'Drooling on the pillow...',
    'Forgetting to submit etotals...',
    'Draining your phone battery...',
    'Explaining Catan to Caly...',
    'Driving to LA...',
    'Dying hair blue...'
];

export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: MESSAGES,
            currentMessage: MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
        }
    }

    componentDidMount() {
        this.interval = setInterval(this._getRandomLoadingMessage.bind(this), 2000);
        this._test();
    }

    _getRandomLoadingMessage() {
        let messages = this.state.messages;
        let length = this.state.messages.length;
        let randomNumber = Math.floor(Math.random() * length);
        if (messages[randomNumber] === this.state.currentMessage) {
            randomNumber = Math.floor(Math.random() * length);
        }
        this.setState({
            currentMessage: messages[randomNumber]
        });
    }

    _test() {
        const photo = {
            base64: this.props.navigation.getParam('photo').base64,
            color: 'blue'
        }

        fetch('https://getstartedpython-cheerful-wolverine.mybluemix.net/api/suggest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(photo)
        })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                clearInterval(this.interval);
                this.props.navigation.navigate('Results', {
                    color: this.props.navigation.getParam('color'),
                    photo: json
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextMono style={styles.infoText}>{this.state.currentMessage}</TextMono>
                <Image
                    source={require('../../assets/loading-hexagon.gif')}
                    style={styles.loading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFCB05'
    },
    loading: {
        width: 200,
        height: 200
    }
});
