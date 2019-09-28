import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Container, ListItem } from 'react-native-elements';
import Spinner from "./components/Spinner";
let MAGAZINE_URL = "";
export default class Screen10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            magazineList: [],
        }
    }


    fetchMagazineList = () => {
        for (let i = 1; i <= 6; i++) {
            MAGAZINE_URL = `https://private-anon-04e11d1177-jikan.apiary-proxy.com/v3/magazine/${i}/1`
            fetch(MAGAZINE_URL)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        magazineList: [...this.state.magazineList, data.meta.name]
                    }, () => {
                        // console.log(this.state.magazineList);
                    })
                })
                .done();
        }
    }
    componentWillMount = () => {
        this.fetchMagazineList();
    }

    static navigationOptions =
        {
            title: 'MainActivity',
        };

    loadMagazineList = () => {
        return (
            <ScrollView>
                {this.state.magazineList.map((magazine, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={magazine}
                            production={magazine}
                            bottomDivider
                            onPress={() => {
                                let magazineType = magazine;
                                this.props.navigation.navigate('Second', { name: magazineType });
                            }}
                        />
                    )
                })}
            </ScrollView>
        )
    }

    loadLoadingView = () => {
        return (
            <View style={styles.MainContainer}>
                <Spinner />
            </View>
        )
    }

    render() {
        if (this.state.magazineList.length < 6) {
            return this.loadLoadingView();
        }
        else {
            return this.loadMagazineList();
        }
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
