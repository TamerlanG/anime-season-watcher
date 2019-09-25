import React from 'react'
import { View, Text, Image, ShadowPropTypesIOS } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from "moment";


const FilmCard = (props) => {
    const time = moment(props.date);
    const newTime = time.format("MMMM Do YYYY")
    return (
        <Card
            title={props.title}
            image={{ uri: props.image }}>
            <Text style={{ marginBottom: 10 }}>
                {props.description}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                Started Airing: {newTime}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

export default FilmCard
