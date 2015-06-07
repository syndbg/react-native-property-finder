'use strict';

var React = require('react-native');
var {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var PropertyView = require('./Property');

var styles = StyleSheet.create({
  thumb: {
    borderColor: '#48BBEC',
    borderRadius: 10,
    borderWidth: 1,
    height: 80,
    marginRight: 10,
    width: 80,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    backgroundColor: '#dddddd',
    height: 1,
  },
  price: {
    color: '#48BBEC',
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    color: '#656565',
    fontSize: 20
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class SearchResults extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  rowPressed(propertyGuid) {
    var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];

    this.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: {property}
    });
  }

  renderRow(rowData, sectionId, rowId) {
    var price = rowData.price_formatted.split(' ')[0];
    return (
      <TouchableHighlight underlayColor="#dddddd" onPress={() => this.rowPressed(rowData.guid)}>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{uri: rowData.img_url}}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.price}>£{price}</Text>
              <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
    )
  }
}

module.exports = SearchResults;
