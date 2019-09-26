import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Container, ListItem } from 'react-native-elements';


export default class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            genreList: [
                "Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Mystery", "Drama", "Ecchi", "Fantasy",
                "Game", "Hentai", "Historical", "Horror", "Kids", "Magic", "Martial Arts", "Mecha", "Music", "Parody",
                "Samurai", "Romance", "School", "Sci Fi", "Shoujo", "Shounen", "Shounen Ai", "Space", "Sports",
                "Super Power", "Vampire", "Yaoi", "Yuri", "Harem", "Slice Of Life", "Supernatural", "Military", "Police", "Psychological",
                "Thriller", "Seinen", "Josei"],
        }
    }



    componentDidMount = () => {

    }

    handlePress = (genre) => {
        console.log(genre.key);
    }

    static navigationOptions =
        {
            title: 'MainActivity',
        };

    render() {
        return (
            <ScrollView>
                {this.state.genreList.map((genre, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={genre}
                            genre={genre}
                            bottomDivider
                            onPress={() => {
                                let genreType = genre
                                this.props.navigation.navigate('Second', { name: genreType });
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
        flexDirection: 'row',
    },
});
