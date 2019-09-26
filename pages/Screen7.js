//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Spinner from "./components/Spinner"
import AnimeCard from "./components/AnimeCard";


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
        const todayDay = this.getDate();
        return (
            <ScrollView styles={styles.MainContainer}>
                {this.state.anime[todayDay].map((show, i) => {
                    return (
                        <View key={i}>
                            <AnimeCard
                                title={show.title}
                                image={show.image_url}
                                description={show.synopsis}
                                date={show.airing_start}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        // return (
        //     <View>
        //         <SearchBar
        //             placeholder="Type Here..."
        //             onChangeText={(event) => {
        //                 this.setState({
        //                     search: event
        //                 }, () => {
        //                     SEARCH_ANIME_RESULTS = `https://api.jikan.moe/v3/search/anime?q=${this.state.search}&page=1`
        //                     fetchData();
        //                 })
        //             }}
        //             value={this.state.search}
        //             containerStyle={{ backgroundColor: '#42b883' }}
        //             inputContainerStyle={{ backgroundColor: '#fff' }}
        //         />
        //     </View>
        // )

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

                    <Text>Results are here!!!</Text>
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
                                SEARCH_ANIME_RESULTS = `https://api.jikan.moe/v3/search/anime?q=${this.state.search}&page=1`
                                this.fetchData();
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
