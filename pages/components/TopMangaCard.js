import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const TopAnimeCard = (props) => {

    let volume = ""
    if (props.volumes == null) {
        volume = "Not Yet Completed"
    }
    else {
        volume = props.volumes
    }


    handleClick = () => {
        Linking.canOpenURL(props.url).then(supported => {
            if (supported) {
                Linking.openURL(props.url);
            } else {
                console.log("Don't know how to open URI: " + this.props.url);
            }
        });
    };

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
            <Text>
                Ended Airing: {props.end}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                Volumes: {volume}
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

export default TopAnimeCard
