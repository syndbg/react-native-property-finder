'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  NavigatorIOS
} = React;

// Helpers
var AsyncStorageHelper = require('./helpers/AsyncStorage');

// Pages
var SearchPage = require('./pages/Search');
var BoardingPage = require('./pages/Boarding');

// Styles
var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

// App
class PropertyFinderApp extends Component {
  constructor(props) {
    super(props);
    AsyncStorage.removeItem('country');
    this.state = {
      country: null,
    };
  }

  render() {
    if (this.state.country) {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Property Finder',
            component: SearchPage
          }} />
      );
    } else {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Property Finder setup',
            component: BoardingPage
          }} />
      );
    }
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
