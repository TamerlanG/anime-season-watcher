import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from "moment";


const FilmCard = (props) => {

    handleClick = () => {
        Linking.canOpenURL(props.url).then(supported => {
            if (supported) {
                Linking.openURL(props.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

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
                title='VIEW NOW'
                onPress={this.handleClick}
            />
        </Card>
    )
}

export default FilmCard
