import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Container, ListItem } from 'react-native-elements';


export default class Screen8 extends Component {
    componentWillMount = () => {
    }
    constructor(props) {
        super(props);
        this.state = {

            producerList: ["Studio Pierrot", "Kyoto Animations", "Gonzo", "Bones", "Bee Train", "Anime Gainax", "J.C.Staff", "Artland"],
        }
    }

    static navigationOptions =
        {
            title: 'MainActivity',
        };

    render() {
        return (
            <ScrollView>
                {this.state.producerList.map((production, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={production}
                            production={production}
                            bottomDivider
                            onPress={() => {
                                let productionType = production
                                this.props.navigation.navigate('Second', { name: productionType });
                            }}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
});
