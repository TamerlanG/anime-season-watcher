import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Button } from "react-native-elements";
import { getActiveChildNavigationOptions } from 'react-navigation';
import { State } from 'react-native-gesture-handler';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import Spinner from "./Spinner"
import AnimeCard from "./AnimeCard";
let GENRE_URL = "";

export default class Production extends Component {

    constructor(props) {
        super(props);
        this.state = {
            producer: null,
            anime: null,
            producerList: ["Studio Pierrot", "Kyoto Animations",
                "Gonzo", "Bones", "Bee Train", "Anime Gainax", "J.C.Staff", "Artland"],
            id: null,

        }
    }

    componentDidMount = () => {
        let name = this.props.navigation.state.params.name;
        this.setState({
            producer: name,
        }, () => {
            this.setState({
                id: this.getCurrentID(),
            }, () => {
                GENRE_URL = `https://private-anon-04e11d1177-jikan.apiary-proxy.com/v3/producer/${this.state.id}/1`
                this.fetchData();

            })
        })

    }

    fetchData = () => {
        fetch(GENRE_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    anime: data,
                }, () => {
                    //console.log(this.state.anime);
                })
            })
            .done();
    }

    getCurrentID = () => {
        for (let i = 0; i < this.state.producerList.length; i++) {
            if (this.state.producerList[i] == this.state.producer) {
                let number = i + 1;
                return number;
            }
        }
    }

    renderLoadingView = () => {
        return (
            <View style={styles.MainContainer}>
                <Spinner />
            </View>
        )
    }

    renderAnime = () => {
        return (
            <ScrollView styles={styles.MainContainer}>
                {this.state.anime.anime.splice(0, 10).map((show, i) => {
                    return (
                        <View key={i}>
                            <AnimeCard
                                title={show.title}
                                image={show.image_url}
                                description={show.synopsis}
                                date={show.airing_start}
                                url={show.url}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }

    static navigationOptions =
        {
            title: "Productions Best"
        };

    render() {
        if (!this.state.anime) {
            return this.renderLoadingView();
        }
        else {
            return this.renderAnime();
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