import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

import { SampleStore } from './../store/types';
import * as actions from './../store/actions';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
interface HomeSceneProps {
    language: string
}

interface HomeSceneDispatchers {
    setLanguage: (l: string) => void
}

class HomeScene extends React.Component<HomeSceneProps & HomeSceneDispatchers> {
    constructor(props: HomeSceneProps & HomeSceneDispatchers) {
        super(props);
    }

    render() {
        const { navigation, route } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Text>Language: {this.props.language}</Text>
                <TextInput 
                style={{height: 40, borderColor: 'grey', borderWidth: 1, width: 200}} 
                placeholder="change language" 
                onChangeText={(text) => this.props.setLanguage(text)}></TextInput>
                <Button title="Go to Tabs" onPress={() => navigation.navigate('Tabs')} />
            </View>
        );
    }
}

function mapStateToProps(state: SampleStore) {
    return {
        language: state.language,
    };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
   return bindActionCreators({
       setLanguage: actions.setLanguage
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);
