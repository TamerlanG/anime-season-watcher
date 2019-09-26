import React from 'react'
import { View, Text, Image, ShadowPropTypesIOS } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const AnimeCardUpcoming = (props) => {
    return (
        <Card
            title={props.title}
            image={{ uri: props.image }}>
            <Text style={{ marginBottom: 10 }}>
                {props.description}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                Source: {props.source}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
    )
}

export default AnimeCardUpcoming
