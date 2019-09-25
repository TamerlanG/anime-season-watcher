//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView, Picker } from 'react-native';
import Spinner from "./components/Spinner"
import AnimeCard from "./components/AnimeCard";


let TODAY_ANIME_URL = "https://api.jikan.moe/v3/schedule";


export default class Screen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            anime: null,
            date: "monday",
        }
    }

    getDate = () => {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const index = new Date().getDay();
        const todayDate = days[index];

        return todayDate;
    }

    fetchData = () => {
        fetch(TODAY_ANIME_URL)
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

    handleChange = (date) => {
        this.setState({
            date: date,
        })
    }

    renderAnime = () => {
        let date = "sunday";
        return (
            <ScrollView styles={styles.MainContainer}>
                <Picker selectedValue={this.state.date} onValueChange={this.handleChange}>
                    <Picker.Item label="Sunday" value="sunday" />
                    <Picker.Item label="Monday" value="monday" />
                    <Picker.Item label="Tuesday" value="tuesday" />
                    <Picker.Item label="Wednesday" value="wednesday" />
                    <Picker.Item label="Thursday" value="thursday" />
                    <Picker.Item label="Friday" value="friday" />
                    <Picker.Item label="Saturaday" value="saturday" />

                </Picker>
                {this.state.anime[this.state.date].map((show, i) => {
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
