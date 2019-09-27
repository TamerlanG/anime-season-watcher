//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import TopAnimeCard from "./components/TopAnimeCard";


let TOP_ANIME_URL = "https://private-anon-02692d3c1d-jikan.apiary-proxy.com/v3/top/anime/1/bypopularity";


export default class Screen6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            anime: null,
        }
    }

    fetchData = () => {
        fetch(TOP_ANIME_URL)
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
                {this.state.anime.top.splice(0, 30).map((show, i) => {
                    return (
                        <View key={i}>
                            <TopAnimeCard
                                title={show.title}
                                image={show.image_url}
                                rank={show.rank}
                                start={show.start_date}
                                end={show.end_date}
                                score={show.score}
                                type={show.type}
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
