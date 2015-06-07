var React = require('react-native');
var {
  AsyncStorage,
  Component
} = React;


var APP_PREFIX = 'PropertyFinder-';

class AsyncStorageHelper {
  setItem(key, value, successCb, errorCb) {
    AsyncStorage.setItem(APP_PREFIX + key, value)
      .then(successCb, errorCb)
      .done();
  }

  setState(key) {
    return (value => this.setState({key: value}));
  }

  getItem(key, successCb, errorCb) {
    AsyncStorage.getItem(APP_PREFIX + key)
      .then(successCb, errorCb)
      .done();
  }

  removeItem(key, successCb, errorCb) {
    AsyncStorage.removeItem(APP_PREFIX + key)
      .then(successCb, errorCb)
      .done();
  }
}

module.exports = AsyncStorageHelper;
