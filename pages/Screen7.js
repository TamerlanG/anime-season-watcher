//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Spinner from "./components/Spinner"
import SearchAnimeCard from "./components/SearchAnimeCard";


let SEARCH_ANIME_RESULTS = "";


export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            anime: null,
            search: ""
        }
    }

    fetchData = () => {
        fetch(SEARCH_ANIME_RESULTS)
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

    }
    renderLoadingView = () => {
        return (
            <View style={styles.MainContainer}>
                <Spinner />
            </View>
        )
    }

    updateSearch = event => {
        this.setState({
            search: event
        }, () => {
            console.log(this.state.search);
        })
    }

    renderAnime = () => {

    }


    render() {
        if (this.state.anime) {
            return (
                <View>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(event) => {
                            this.setState({
                                search: event
                            }, () => {
                                SEARCH_ANIME_RESULTS = `https://api.jikan.moe/v3/search/anime?q=${this.state.search}&page=1`
                                this.fetchData();
                            })
                        }}
                        value={this.state.search}
                        containerStyle={{ backgroundColor: '#42b883' }}
                        inputContainerStyle={{ backgroundColor: '#fff' }}
                    />

                    <ScrollView styles={styles.MainContainer}>
                        {this.state.anime.results.splice(0, 10).map((show, i) => {
                            return (
                                <View key={i}>
                                    <SearchAnimeCard
                                        title={show.title}
                                        image={show.image_url}
                                        description={show.synopsis}
                                        start={show.start_date}
                                        end={show.end_date}
                                        score={show.score}
                                        episodes={show.episodes}
                                        airing={show.airing}
                                        url={show.url}
                                    />
                                </View>
                            )
                        })}
                    </ScrollView>

                </View>
            )
        }
        else {
            return (
                <View>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(event) => {
                            this.setState({
                                search: event
                            }, () => {
                                setTimeout(() => {
                                    SEARCH_ANIME_RESULTS = `https://api.jikan.moe/v3/search/anime?q=${this.state.search}&page=1`
                                    this.fetchData();
                                }, 5000)
                            })
                        }}
                        value={this.state.search}
                        containerStyle={{ backgroundColor: '#42b883' }}
                        inputContainerStyle={{ backgroundColor: '#fff' }}
                    />
                </View>
            )
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
