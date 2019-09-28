import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import moment from 'moment';

const MagazineCard = (props) => {

    const time = moment(props.start);
    const newTime = time.format("MMMM Do YYYY");

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
                Started Publising: {newTime}
            </Text>
            <Text>
                Type: {props.type}
            </Text>
            <Text>
                Genre: {props.genre[0].name}
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

export default MagazineCard
