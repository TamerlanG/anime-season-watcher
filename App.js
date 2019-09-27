//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
// import all basic components

//Import required react-navigation component
import {
  createAppContainer,
} from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer'

import { createStackNavigator } from 'react-navigation-stack'


//Import all the screens
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';
import Screen6 from './pages/Screen6';
import Screen7 from './pages/Screen7';
import Screen8 from './pages/Screen8';
import Screen9 from './pages/Screen9';
import Genre from './pages/components/Genre';
import Production from './pages/components/Production';


//Import Custom Sidebar
import CustomSidebarMenu from './CustomSideBarMenu';

global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Today',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Week',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Season',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for the Fourth Option of Navigation Drawer
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Fourth Option will be indexed here
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Upcoming',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Stack Navigator for the Fourth Option of Navigation Drawer
const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Fourth Option will be indexed here
  Fourth: {
    screen: Screen6,
    navigationOptions: ({ navigation }) => ({
      title: 'Top 30 Most Popular Anime',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Stack Navigator for the Seventh Option of Navigation Drawer
const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Fourth Option will be indexed here
  First: {
    screen: Screen7,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Anime',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Stack Navigator for the Seventh Option of Navigation Drawer
const Screen9_StackNavigator = createStackNavigator({
  //All the screen from the Fourth Option will be indexed here
  First: {
    screen: Screen9,
    navigationOptions: ({ navigation }) => ({
      title: 'Top 30 Manga',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Stack Navigator for the Fifth Option of Navigation Drawer
const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Fifth Option will be indexed here
  First: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: 'Genre',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },

  Second: {
    screen: Genre,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  }

});

//Stack Navigator for the Seventh Option of Navigation Drawer
const Screen8_StackNavigator = createStackNavigator({
  //All the screen from the Fourth Option will be indexed here
  First: {
    screen: Screen8,
    navigationOptions: ({ navigation }) => ({
      title: 'Producer List',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
  Second: {
    screen: Production,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#42b883',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Today',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Week',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Season',
      },
    },
    NavScreen4: {
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Upcoming',
      },
    },
    NavScreen5: {
      screen: Screen5_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Genre',
      },
    },
    NavScreen6: {
      screen: Screen6_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Top',
      },
    },
    NavScreen7: {
      screen: Screen7_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Search',
      },
    },
    NavScreen8: {
      screen: Screen8_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Producer',
      },
    },
    NavScreen9: {
      screen: Screen9_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Manga',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);