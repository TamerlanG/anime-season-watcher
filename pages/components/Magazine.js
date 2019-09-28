import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Button } from "react-native-elements";
import { getActiveChildNavigationOptions } from 'react-navigation';
import { State } from 'react-native-gesture-handler';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import Spinner from "./Spinner"
import MagazineCard from "./MagazineCard";
let GENRE_URL = "";

export default class Magazine extends Component {


    constructor(props) {
        super(props);
        this.state = {
            magazine: null,
            manga: null,
            magazineList: ["Big Comic Original", "Young Animal",
                "Big Comics Spirits", "Afternoon", "Web Comic Gum", "Young Magazine (Monthly)"],
            id: null,

        }
    }

    componentDidMount = () => {
        let name = this.props.navigation.state.params.name;
        this.setState({
            magazine: name,
        }, () => {
            this.setState({
                id: this.getCurrentID(),
            }, () => {
                GENRE_URL = `https://private-anon-04e11d1177-jikan.apiary-proxy.com/v3/magazine/${this.state.id}/1`
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
                    manga: data,
                }, () => {
                    console.log(this.state.manga);
                })
            })
            .done();
    }

    getCurrentID = () => {
        for (let i = 0; i < this.state.magazineList.length; i++) {
            if (this.state.magazineList[i] == this.state.magazine) {
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
                {this.state.manga.manga.splice(0, 10).map((show, i) => {
                    return (
                        <View key={i}>
                            <MagazineCard
                                title={show.title}
                                image={show.image_url}
                                description={show.synopsis}
                                date={show.publishing_start}
                                url={show.url}
                                genre={show.genres}
                                type={show.type}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }

    static navigationOptions =
        {
            title: "Magazines Best"
        };

    render() {
        if (!this.state.manga) {
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