//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView, Picker } from 'react-native';
import Spinner from "./components/Spinner"
import AnimeCard from "./components/AnimeCard";


let SEASON_ANIME_URL = "";


export default class Screen3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            anime: null,
            season: "winter",
            year: 2019,
        }
    }

    fetchData = () => {
        fetch(SEASON_ANIME_URL)
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
        SEASON_ANIME_URL = `https://private-anon-f1c3e93e7b-jikan.apiary-proxy.com/v3/season/${this.state.year}/${this.state.season}`
        this.fetchData();
    }
    renderLoadingView = () => {
        return (
            <View style={styles.MainContainer}>
                <Spinner />
            </View>
        )
    }

    handleChangeYear = (yearDate) => {

        this.setState({
            anime: null,
            year: yearDate
        }, () => {
            console.log(yearDate);
            console.log(this.state.year);
            SEASON_ANIME_URL = `https://private-anon-f1c3e93e7b-jikan.apiary-proxy.com/v3/season/${this.state.year}/${this.state.season}`
            this.fetchData();
        });

    }

    handleChangeSeason = (season) => {

        this.setState({
            anime: null,
            season: season
        }, () => {
            console.log(season);
            console.log(this.state.season);
            SEASON_ANIME_URL = `https://private-anon-f1c3e93e7b-jikan.apiary-proxy.com/v3/season/${this.state.year}/${this.state.season}`
            this.fetchData();
        });

    }

    renderAnime = () => {
        return (
            <ScrollView styles={styles.MainContainer}>
                <Picker selectedValue={this.state.year} onValueChange={this.handleChangeYear}>
                    <Picker.Item label="2020" value={2020} />
                    <Picker.Item label="2019" value={2019} />
                    <Picker.Item label="2018" value={2018} />
                    <Picker.Item label="2017" value={2017} />
                    <Picker.Item label="2016" value={2016} />
                    <Picker.Item label="2015" value={2015} />
                    <Picker.Item label="2014" value={2014} />
                    <Picker.Item label="2013" value={2013} />
                    <Picker.Item label="2012" value={2012} />
                    <Picker.Item label="2011" value={2011} />
                    <Picker.Item label="2010" value={2010} />
                </Picker>
                <Picker selectedValue={this.state.season} onValueChange={this.handleChangeSeason}>
                    <Picker.Item label="Spring" value="winter" />
                    <Picker.Item label="Summer" value="summer" />
                    <Picker.Item label="Fall" value="fall" />
                    <Picker.Item label="Winter" value="winter" />
                </Picker>
                {this.state.anime.anime.splice(0, 15).map((show, i) => {
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
