import React from 'react'
import { View, Text, Image, ShadowPropTypesIOS } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from "moment";


const SearchAnimeCard = (props) => {
    const startDate = moment(props.start).format("MMMM Do YYYY");
    const endDate = moment(props.end).format("MMMM Do YYYY")
    return (
        <Card
            title={props.title}
            image={{ uri: props.image }}>
            <Text style={{ marginBottom: 10 }}>
                {props.description}
            </Text>
            <Text>
                Started Airing: {startDate}
            </Text>
            <Text>
                Ended Airing: {endDate}
            </Text>
            <Text>
                Currently Airing: {props.airing}
            </Text>
            <Text>
                Episodes: {props.episodes}
            </Text>
            <Text>
                Score: {props.score}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

export default SearchAnimeCard
