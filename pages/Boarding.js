'use strict';

var React = require('react-native');
var {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;
// Helpers
var AsyncStorageHelper = require('../helpers/AsyncStorage');
// Pages
var SearchPage = require('./Search');

var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  heading: {
     backgroundColor: '#F8F8F8',
     textAlign: 'center'
  },
  image: {
   width: 217,
   height: 138
  },
  title: {
    color: '#656565',
    fontSize: 20,
    margin: 5,
  },
  description: {
    color: '#656565',
    fontSize: 18,
    margin: 5,
  },
  buttons: {
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 2,
    backgroundColor: '#F8F8F8',
    borderRadius: 6,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 18,
    color: '#48BBEC',
    alignSelf: 'center'
  }
});

var supportedCountries = [
  {id: 'com.au', name: 'Austria'},
  {id: 'com.br', name: 'Brazil'},
  {id: 'de', name: 'Germany'},
  {id: 'es', name: 'Spain'},
  {id: 'fr', name: 'France'},
  {id: 'in', name: 'India'},
  {id: 'it', name: 'Italy'},
  {id: 'co.uk', name: 'United Kingdom'},
];

class Boarding extends Component {
  render() {
    var buttons = [];
    console.log(this.props.navigator);
    console.log(this.refs);
    function buttonPressed(event) {
      this.props.navigator.push({
        title: 'Property Finder',
        component: SearchPage
      });
    }
    supportedCountries.forEach(function (country) {
      buttons.push(<TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
      <Text style={styles.buttonText}
            onPress={buttonPressed.bind(this)}>{country.name}</Text>
    </TouchableHighlight>);
    });

    return (
      <View style={styles.container}>
        <Image source={require('image!house')} style={styles.image} />
        <Text style={styles.heading}>
          Please select one of the supported countries
        </Text>
        <View style={styles.buttons}>
          {buttons}
        </View>
      </View>
    );
  }
}

module.exports = Boarding;
