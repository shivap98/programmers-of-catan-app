import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import TextMono from '../components/TextMono';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ColorSelectionScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _navigateToCapture(color) {
        // this.props.navigation.navigate('Capture', {
        //     color: color
        // });
        this.props.navigation.navigate('Loading', {
            color: color
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextMono style={styles.infoText}>Choose your color</TextMono>
                <TouchableOpacity
                    style={styles.test}
                    onPress={this._navigateToCapture.bind(this, 'red')}
                >
                    <Image
                        style={styles.red}
                        source={require('../../assets/red.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this, 'orange')}
                >
                    <Image
                        style={styles.orange}
                        source={require('../../assets/orange.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this, 'green')}
                >
                    <Image
                        style={styles.green}
                        source={require('../../assets/green.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this, 'blue')}
                >
                    <Image
                        style={styles.blue}
                        source={require('../../assets/blue.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this, 'brown')}
                >
                    <Image
                        style={styles.brown}
                        source={require('../../assets/brown.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this._navigateToCapture.bind(this, 'white')}
                >
                    <Image
                        style={styles.white}
                        source={require('../../assets/white.png')}
                    />
                </TouchableOpacity>
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
    red: {
        width: 97 * 1.3,
        height: 84 * 1.3
    },
    orange: {
        width: 97 * 1.3,
        height: 84 * 1.3
    },
    green: {
        width: 97 * 1.3,
        height: 84 * 1.3
    },
    blue: {
        width: 97 * 1.3,
        height: 84 * 1.3
    },
    brown: {
        width: 97 * 1.3,
        height: 84 * 1.3
    },
    white: {
        width: 97 * 1.3,
        height: 84 * 1.3
    }
});
