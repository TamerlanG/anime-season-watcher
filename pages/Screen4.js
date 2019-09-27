//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import AnimeCardUpcoming from "./components/AnimeCardUpcoming";


let LATER_ANIME_URL = "https://private-anon-f1c3e93e7b-jikan.apiary-proxy.com/v3/season/later";


export default class Screen4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            anime: null,
        }
    }

    fetchData = () => {
        fetch(LATER_ANIME_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    anime: data,
                }, () => {
                })
            })
            .done();
    }
    componentDidMount = () => {
        this.fetchData();
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
                {this.state.anime.anime.slice(0, 15).map((show, i) => {
                    return (
                        <View key={i}>
                            <AnimeCardUpcoming
                                title={show.title}
                                image={show.image_url}
                                description={show.synopsis}
                                source={show.source}
                                url={show.url}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


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
