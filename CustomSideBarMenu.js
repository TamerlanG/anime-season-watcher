//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar
        this.proileImage =
            'https://images-na.ssl-images-amazon.com/images/I/41xVddL6%2BCL.jpg';
        //Array of the sidebar navigation option with icon and screen to navigate
        //This screens can be any screen defined in Drawer Navigator in App.js
        //You can find the Icons from here https://material.io/tools/icons/
        this.items = [
            {
                navOptionThumb: 'today',
                navOptionName: 'Today',
                screenToNavigate: 'NavScreen1',
            },
            {
                navOptionThumb: 'assessment',
                navOptionName: 'Week',
                screenToNavigate: 'NavScreen2',
            },
            {
                navOptionThumb: 'list',
                navOptionName: 'Season',
                screenToNavigate: 'NavScreen3',
            },
            {
                navOptionThumb: 'announcement',
                navOptionName: 'Upcoming',
                screenToNavigate: 'NavScreen4',
            },
            {
                navOptionThumb: 'apps',
                navOptionName: 'Top Anime ',
                screenToNavigate: 'NavScreen6',
            },
            {
                navOptionThumb: 'apps',
                navOptionName: 'Top Manga',
                screenToNavigate: 'NavScreen9',
            },
            {
                navOptionThumb: 'book',
                navOptionName: 'Genre',
                screenToNavigate: 'NavScreen5',
            },
            {
                navOptionThumb: 'movie',
                navOptionName: 'Producer',
                screenToNavigate: 'NavScreen8',
            },
            {
                navOptionThumb: 'search',
                navOptionName: 'Search',
                screenToNavigate: 'NavScreen7',
            },
        ];
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}>
                {/*Top Large Image */}
                <Image
                    source={{ uri: this.proileImage }}
                    style={styles.sideMenuProfileIcon}
                />
                {/*Divider between Top Image and Sidebar Option*/}
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#e2e2e2',
                        marginTop: 15,
                    }}
                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>
                    {this.items.map((item, key) => (
                        <View key={key}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                backgroundColor: global.currentScreenIndex === key ? '#fff' : '#fff',
                            }}>
                            <View style={{ marginRight: 10, marginLeft: 20 }}>
                                <Icon name={item.navOptionThumb} size={25} color="#808080" />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: global.currentScreenIndex === key ? '#347474' : 'black',
                                }}
                                onPress={() => {
                                    global.currentScreenIndex = key;
                                    this.props.navigation.navigate(item.screenToNavigate);
                                }}>
                                {item.navOptionName}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
    },
});