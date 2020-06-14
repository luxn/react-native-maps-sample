import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
export default class HomeScene extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { navigation, route } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button title="Go to Tabs" onPress={() => navigation.navigate('Tabs')} />
            </View>
        );
    }
}
