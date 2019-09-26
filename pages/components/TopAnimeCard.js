import React from 'react'
import { View, Text, Image, ShadowPropTypesIOS } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const TopAnimeCard = (props) => {

    return (
        <Card
            title={props.title}
            image={{ uri: props.image }}>
            <Text>
                Rank: {props.rank}
            </Text>
            <Text>
                Type: {props.type}
            </Text>
            <Text>
                Score: {props.score}
            </Text>
            <Text>
                Started Airing: {props.start}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                Ended Airing: {props.end}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

export default TopAnimeCard
