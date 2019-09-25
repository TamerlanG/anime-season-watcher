//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Spinner from "./components/Spinner"
import People from "./components/People";

const ALL_PEOPLE_URL = "https://ghibliapi.herokuapp.com/people";


export default class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            people: null,
        }
    }

    fetchData = () => {
        fetch(ALL_PEOPLE_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    people: data
                }, () => {
                    console.log(this.state.people)
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

    renderFilms = () => {
        return (
            <ScrollView styles={styles.MainContainer}>
                {this.state.people.map((person, i) => {
                    return (
                        <View key={i}>
                            <People
                                name={person.name}
                                gender={person.gender}
                                age={person.age}
                                eye_color={person.eye_color}
                                hair_color={person.hair_color} />
                        </View>
                    )
                })}
            </ScrollView>
        )
    }


    render() {
        if (!this.state.people) {
            return this.renderLoadingView();
        }
        else {
            return this.renderFilms();
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
